import axios from 'axios';
import * as actionTypes from '../actions/types'

export const loadUser = () => (dispatch, getState) => {
    // calling loading
    dispatch({type: actionTypes.USER_LOADING});
    
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
    
    axios.get('http://localhost/8000/api/auth/user', config)
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