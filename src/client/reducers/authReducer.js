import React from 'react'; 
import { FETCH_CURRENT_USER } from '../actions/actions'; 
import { LOGOUT_CURRENT_USER } from '../actions/actions'; 


export default (state = null, action) => {
    switch(action.type) {
        case FETCH_CURRENT_USER: 
            return true; 
        case LOGOUT_CURRENT_USER: 
            return false
        default: 
            return state; 
    }
}