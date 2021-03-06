import React from 'react'; 
import { renderRoutes } from 'react-router-config';
import Header from './components/header'; 

const App = ({ route }) => {
    return(
        <div>
            <Header /> 
            {renderRoutes(route.routes)}
        </div>
    )
}; 

export default {
    component: App, 
    loadData: () => console.log('this is the app compeonts loaddata function!')
}; 