import 'regenerator-runtime/runtime';
import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom'; 
import { HelmetProvider } from 'react-helmet-async'; 
import { loadableReady } from '@loadable/component'
import reducers from './reducers'; 
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'; 
import { Provider } from 'react-redux';
import { renderRoutes } from "react-router-config"

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(reducers, preloadedState, applyMiddleware(thunk)); 

loadableReady(() => {
    ReactDOM.hydrate(
        <React.StrictMode>
            <Provider store={store}>
                <HelmetProvider>
                    <BrowserRouter>
                        <div>{renderRoutes(Routes)}</div>
                    </BrowserRouter>
                </HelmetProvider>
            </Provider>
        </React.StrictMode>, 
        document.querySelector('#root')
    )
});

