


// Testing actions: 

export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER"; 
export const fetchCurrentUser = () => async dispatch => {
    dispatch({ type: FETCH_CURRENT_USER, payload: true }); 
}


export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"; 
export const logoutCurrentUser = () => async dispatch => {
    dispatch({ type: LOGOUT_CURRENT_USER, payload: false }); 
}


export const INCREMENT = "INCREMENT"; 
export const increment = () => async dispatch => {
    dispatch({ type: INCREMENT }); 
}

export const DECREMENT = "DECREMENT";
export const decrement = () => async dispatch => {
    dispatch({ type: DECREMENT }); 
}

