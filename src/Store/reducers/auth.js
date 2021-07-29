import * as actiontTypes from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated:null,
    isLoading: false,
    user: null
}

const auth = function(state=initialState, action){
    switch (action.type) {
        case actiontTypes.USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case actiontTypes.USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case actiontTypes.LOGIN_SUCCESS:
        case actiontTypes.REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        case actiontTypes.AUTH_ERROR:
        case actiontTypes.LOGIN_FAIL:
        case actiontTypes.LOGOUT_SUCCESS:
        case actiontTypes.REGISTER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default:
            return state;
    }
}

export default auth;