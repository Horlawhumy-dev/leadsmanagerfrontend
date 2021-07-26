import React from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Redirect} from 'react-router';
import Loading from '../layouts/Loading';

const PrivateRoutes = ({ component: Component, auth, ...rest}) => (
    <Route 
        {...rest}
        render={props => {
            if(auth.isLoading){
                return <Loading />
            }else if(!auth.isAuthenticated) {
                return <Redirect to="/login" />
            }else {
                return <Component {...props} />
            }
        }}
    />
)
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoutes);
