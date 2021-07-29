import axios from 'axios';
import * as actionTypes from '../actions/types'

export const loadUser = () => (dispatch, getState) => {
    // calling loading
    dispatch({type: actionTypes.USER_LOADING});
    axios.get('http://localhost/8000/api/auth/user', tokenConfig(getState))
    .then(res => {
        dispatch({
            type: actionTypes.USER_LOADED,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: actionTypes.AUTH_ERROR
        })
    })
}

export const login = (username, password) => dispatch => {
    // calling loading
    dispatch({type: actionTypes.USER_LOADING});

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({username, password})

    axios.post('http://localhost:8000/api/auth/login', body, config)
    .then(res => {
        dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: actionTypes.LOGIN_FAIL
        })
    })
}

export const registerUser = ({ username, password,  email}) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({username, password, email})

    axios.post('http://localhost:8000/api/auth/register', body, config)
    .then(res => {
        dispatch({
            type: actionTypes.REGISTER_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: actionTypes.REGISTER_FAIL
        })
    })
}

// Logout Action
export const logout = () => (dispatch, getState) => {
    axios.post('http://localhost:8000/api/auth/logout', null, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: actionTypes.LOGOUT_SUCCESS
        })
    })
    .catch(err => {
        console.log(err)
    })
}


export const tokenConfig = getState => {
     // get token from state
     const token = getState().auth.token;

     const config = {
         headers: {
             'Content-Type': 'application/json'
         }
     }
     // setting token to authorization
     if(token) { 
         config.headers['Authorization'] = `Token ${token}`;
     }

     return config
}
