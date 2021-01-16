import React from 'react'; 
import loadable from '@loadable/component'; 
import { Switch, Route } from 'react-router'; 
import Header from './components/header';
const HomePage = loadable(() => import('./views/homePageView'), { ssr: true }); 
const AboutPage = loadable(() => import('./views/aboutPageView'), { ssr: true })

export default () => {
    return(
        <Switch>
            <Route exact path="/" component={props => <HomePage {...props}/>}/> 
            <Route path="/about" component={props => <AboutPage {...props} />} />
        </Switch>        
    )
}; 
