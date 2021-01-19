import React from 'react'; 
import loadable from '@loadable/component'; 
import Header from './components/header';
import App from './App'; 
const NotFound = loadable(() => import('./components/not-found')); 
const HomePage = loadable(() => import('./views/homePageView')); 
const AboutPage = loadable(() => import('./views/aboutPageView'));

// **** Important **** // 
// Cannot export/import component and its loadData function as an object
// incompatible with loadable/component
// Solution: import them separately from load-data folder
import loadAboutData from './load-data/loadAboutData'; 
import loadNotFoundData from './load-data/loadNotFoundData'; 
import loadHomeData from './load-data/loadHomeData'; 

export default [
    {
        ...App, 
        routes: [
            {
                path: "/", 
                exact: true, 
                component: HomePage, 
                loadData: loadHomeData
            }, 
            {
                path: "/about",  
                component: AboutPage, 
                loadData: loadAboutData
            }, 
            {
                path: "", 
                component: NotFound,
                loadData: loadNotFoundData 
            }
        ]
    }
]; 