import 'regenerator-runtime/runtime';
import React from 'react';
import express from 'express';
import renderer from './helpers/renderer';
import bodyParser from 'body-parser'; 
import createStore from './helpers/createStore'; 


const PORT = process.env.PORT || 5000; 
const app = express(); 

app.use(bodyParser.json()); 
app.use(express.static("dist/public"));

app.get('*', (req, res) => {
  
  // FETCH REDUX STORE 
  const store = createStore(req); 

  res.send(renderer(req, store));
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`)); 

