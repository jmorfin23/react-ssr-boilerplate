import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server'; 
import { App } from '../src/App';
import path from 'path'; 
import bodyParser from 'body-parser'; 
import { HTMLTemplate } from '../src/template'; 

const PORT = process.env.PORT || 5000; 
const app = express(); 


app.use(bodyParser.json()); 
app.use(express.static(__dirname + "../dist"));

app.get('*', (req, res) => {
  const component = ReactDOMServer.renderToString(<App />); 
  const html = HTMLTemplate(component); 
  res.send(html);
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`)); 

