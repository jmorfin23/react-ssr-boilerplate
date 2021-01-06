import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { App } from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { HelmetProvider } from 'react-helmet-async'; 

ReactDOM.hydrate(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <App /> 
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>, 
    document.querySelector('#root')
)

