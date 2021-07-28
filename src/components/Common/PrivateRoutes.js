import React from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { Redirect} from 'react-router';
import Loading from '../layouts/Loading';

const PrivateRoutes = ({ component: Component, auth, ...rest}) => (
   <Route 
        {...rest}
        render={props => {
            return <Component />
        }}
   />
)
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoutes);
// <Route 
// {...rest}
// render={props => {
//     if(this.props.auth.isLoading){
//         return <Loading />
//     }else if(!this.props.auth.isAuthenticated) {
//         return <Redirect to="/login" />
//     }else {
//         return <Component {...props} />
//     }
// }}
// />