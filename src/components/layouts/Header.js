import React, {Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../Store/actions/auth'

class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <span className="navbar-text mr-3">
                    <strong>{user ? `Welcome ${user.username}`: null}</strong>
                </span>
                <li className="nav-item">
                    <button 
                        onClick={this.props.logout}
                        className="nav-link btn-info btn-sm text-light">Logout</button>
                </li>
            </ul>
        )

        const guestLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link className="navbar-brand" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/">Login</Link>         
                </li>
            </ul>
        )
        return ( 
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-blue bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/dashboard">Lead Manager</Link>
                        { isAuthenticated ? authLinks : guestLinks}
                    </div>
                </nav>
            </Fragment>
        )
    }
  
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, {logout})(Header);
// <li className="nav-item">
//                     <button className="nav-link btn-info btn-sm text-light">Logout</button>
//                 </li>