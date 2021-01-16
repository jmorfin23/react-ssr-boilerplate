import React from 'react'; 
import { Helmet } from 'react-helmet-async'; 
import './index.css'; 
import loadable from '@loadable/component'; 
import { Link } from 'react-router-dom'; 
import SampleComponent from '../../components/sampleComponent'; 
import { connect } from 'react-redux'; 
import { increment, decrement } from '../../actions/actions'; 

const HomePage = (props) => {
    console.log('homepage')
    console.log(props)
    return(
        <div className="homepage">
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <h1>Home Page {props.counter}</h1>
            <button type="button" onClick={() => props.increment()}>increment</button>
            <button type="button" onClick={() => props.decrement()}>decrement</button>
            <Link to="/about">Go to Aabout page</Link>
            <SampleComponent /> 
        </div>
    ); 
}

const mapStateToProps = ({ counter }) => ({ counter }); 

export default connect(mapStateToProps, { increment, decrement })(HomePage); 