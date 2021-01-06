import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server'; 
import { App } from './src/App';
import bodyParser from 'body-parser'; 
import { HTMLTemplate } from './template'; 
import { Helmet, HelmetProvider } from 'react-helmet-async' 
import { StaticRouter } from 'react-router'; 

const PORT = process.env.PORT || 5000; 
const app = express(); 

app.use(bodyParser.json()); 
app.use(express.static("dist/public"));

app.get('*', (req, res) => {
  const context = {}; 
  const helmetContext = {}; 

  const component = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </StaticRouter>
  );
  
  const { helmet } = helmetContext; 
  const html = HTMLTemplate(component, helmet); 
  res.send(`<!DOCTYPE html>${html}`);

})

app.listen(PORT, () => console.log(`server started on port ${PORT}`)); 

