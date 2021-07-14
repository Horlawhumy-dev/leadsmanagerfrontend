
import { getLeadsFromAPI } from './actionTypes';

export const getLeads = () => dispatch => {
    fetch('http://localhost:8000/api/leads')
        .then(res => {
            res.json()
        })
        .then(data => {
            dispatch({
                ...getLeadsFromAPI,
                payload: data
            })
        })
        .catch(err => console.log(err))
}