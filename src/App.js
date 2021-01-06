import React from 'react'; 
import { HomePage } from './views/homePageView/'; 
import { Switch, Route } from 'react-router'; 


export const App = () => {
    return(
        <Switch>
            <Route path="/" render={() => <HomePage />}/> 
        </Switch>        
    )
}
