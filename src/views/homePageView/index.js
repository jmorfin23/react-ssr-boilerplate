import React from 'react'; 
import { Helmet } from 'react-helmet-async'; 
import './index.css'; 
import { SampleComponent } from '../../components/sampleComponent'; 

export const HomePage = () => {
    return(
        <div className="homepage">
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <h1>Home Page</h1>
            <SampleComponent /> 
        </div>
    )
}