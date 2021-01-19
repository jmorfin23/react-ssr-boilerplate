import 'regenerator-runtime/runtime';
import React from 'react';
import express from 'express';
import Routes from './client/routes'; 
import renderer from './helpers/renderer';
import bodyParser from 'body-parser'; 
import createStore from './helpers/createStore'; 
import { matchRoutes } from 'react-router-config';

const PORT = process.env.PORT || 5000; 

const app = express(); 

app.use(bodyParser.json()); 
app.use(express.static("dist/public"));

app.get('*', (req, res) => {
  
  // FETCH REDUX STORE 
  const store = createStore(req); 

  // ___ Find all data needed to be loaded ___ 

  // matchRoutes returns an array of components about to be rendered
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    // If route has a loadData function: call it 
 
    return route.loadData ? route.loadData(store) : null; 
  }).map(promise => {
    if (promise) {
      return new Promise((resolve, reject) => {
        promise.then(resolve).catch(resolve); 
      }); 
    }; 
  }); 

  // Render page when all promises resolve
  Promise.all(promises).then(() => {
    const context = {}; 
    const content = renderer(req, store, context); 

    if (context.url) {
      return res.redirect(301, context.url); 
    }
    if (context.notFound) {
      res.status(404); 
    }; 
    res.send(content);
  }); 
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`)); 

