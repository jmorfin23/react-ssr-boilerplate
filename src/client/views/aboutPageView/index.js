import React from 'react'; 
import { Helmet } from 'react-helmet-async'; 
import { Link } from 'react-router-dom'; 

export default () => {
    return(
        <div className="aboutpage">
            <Helmet>
                <title>About Page</title>
            </Helmet>
            <h1>About page </h1>
            <Link to="/">go to home page</Link>
            <p>balksjdf;ajsd;klfja;lsdkfja</p>
            <button type="button" onClick={() => console.log('testing..')}>Press Me!</button>
        </div>
    )
}