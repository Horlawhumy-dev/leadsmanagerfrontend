import axios from 'axios';
import { tokenConfig } from './auth';
import { GET_LEADS, ADD_LEAD, DELETE_LEAD} from './types';

export const getLeads = () => (dispatch, getState) => {
    axios.get('http://localhost:8000/api/leads', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const addLead = lead => (dispatch, getState)=> {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post('http://localhost:8000/api/leads/', lead, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: ADD_LEAD,
            payload: res.data
        })
    })
    .catch(err => console.error(err))
} 

export const deleteLead = id => (dispatch, getState) => {
    axios.delete(`http://localhost:8000/api/leads/${id}/`, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: DELETE_LEAD,
            payload: id
        })
    })
    .catch(err => console.log(err))
}