import React, { Component } from 'react'
import {Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {login} from '../../Store/actions/auth'
import PropTypes from 'prop-types'




export class Login extends Component {
    state = {
        username: "",
        password: "",
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password)

        this.setState({
            username: '',
            password: ''
        })
    }
    
    render() {
        if(this.props.isAuthenticated){
            return <Redirect to="/dashboard" />
        }
        const {username, password} = this.state;
        return (
            <div className="container">
                <h3>Log In</h3>
                <form method="POST" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={username}
                            name="username"
                            onChange={this.onChange} 
                            aria-describedby="emailHelp" placeholder="Enter name" />
                    </div >
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Password</label>
                        <input 
                            type="password"
                            className="form-control" 
                            id="exampleFormControlTextarea1"
                            value={password} 
                            name="password"
                            onChange={this.onChange} 
                            rows="3" placeholder="Enter your password"/>
                    </div>
                    <button type="submit" className="btn btn-success mt-2">Submit</button>
                    <p className="">Don't have an account?
                        <Link to="/register">Register</Link>
                    </p>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, { login })(Login);
