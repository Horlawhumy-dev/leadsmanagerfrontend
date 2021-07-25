import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Lead Manager</Link>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/form">Form</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/login">Login</Link>         
                        </li>
                    </ul>
                   
                </div>
            </nav>
        </Fragment>
    )
}

export default Header;
