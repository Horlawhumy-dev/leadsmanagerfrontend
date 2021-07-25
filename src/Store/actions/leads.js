import axios from 'axios';
import { GET_LEADS, ADD_LEAD, DELETE_LEAD} from './types';

export const getLeads = () => dispatch => {
    axios.get('http://localhost:8000/api/leads')
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const addLead = lead => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post('http://localhost:8000/api/leads/', lead, config)
    .then(res => {
        dispatch({
            type: ADD_LEAD,
            payload: res.data
        })
    })
    .catch(err => console.error(err))
} 

export const deleteLead = id => dispatch => {
    axios.delete(`http://localhost:8000/api/leads/${id}/`)
    .then(res => {
        dispatch({
            type: DELETE_LEAD,
            payload: id
        })
    })
    .catch(err => console.log(err))
}