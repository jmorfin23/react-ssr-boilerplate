import React from 'react'; 
import ReactDOMServer from 'react-dom/server'; 
import Routes from '../client/routes';
import HTMLTemplate from './createTemplate'; 
import { HelmetProvider } from 'react-helmet-async' 
import { StaticRouter } from 'react-router'; 
import { ChunkExtractor } from '@loadable/server'
import { Provider } from 'react-redux'; 
import { renderRoutes } from 'react-router-config'; 
import path from 'path';

export default (req, store, context) => {
// Context used to handle some redirects 

const helmetContext = {}; 

const statsFile = path.resolve('./dist/public/loadable-stats.json');

const webextractor = new ChunkExtractor({ statsFile }); 

const app = webextractor.collectChunks(renderRoutes(Routes)); 

const component = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <HelmetProvider context={helmetContext}>
          <div>{app}</div>
        </HelmetProvider>
      </StaticRouter> 
    </Provider>
);

// polyfill conflicts in IE11 if some chunks
// load before your polyfill. To avoid this issue, disable async bypassing { async: false }
const scriptTags = webextractor.getScriptTags({ async: false }) 

const styleTags = webextractor.getStyleTags(); 

const { helmet } = helmetContext; 

const preloadedState = store.getState(); 

return `<!DOCTYPE html>${HTMLTemplate(component, helmet, scriptTags, preloadedState, styleTags)}`; 
}; 