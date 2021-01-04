import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server'; 
import App from '../src/App';
import path from 'path'; 
const PORT = process.env.PORT || 5000; 
const app = express(); 

app.listen(PORT, () => console.log(`server started on port ${PORT}`)); 

