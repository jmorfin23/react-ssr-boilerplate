import React from 'react'; 
import { Helmet } from 'react-helmet-async'; 
import { Link } from 'react-router-dom'; 

export default () => {
    return(
        <div className="aboutpage">
            <Helmet>
                <title>another</title>
            </Helmet>
            <h1>another page </h1>
            <button type="button" onClick={() => console.log('testing..')}>Press Me!</button>
        </div>
    )

}