import React, { Component } from 'react'
import {Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {registerUser} from '../../Store/actions/auth'
import PropTypes from 'prop-types'


export class Register extends Component {
    state = {
        username: "",
        email: "", 
        password: "",
        password2: ""
    }
   
    static propTypes = {
        registerUser: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }
    onSubmit = e => {
        e.preventDefault();
        const {username, password, password2, email} = this.state;
        if(password !== password2){
            alert('Passwords do not match!!')
        }else{
            this.props.registerUser({username, password, email})
            
        }

        this.setState({
            username: '',
            password: '',
            password2: '',
            email: ''
        })
    }
    render() {
        if(this.props.isAuthenticated){
            return <Redirect exact to="/" />
        }
       const {username, email, password, password2} = this.state;
        return (
            <div className="container">
                <h3>Create Account</h3>
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
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                value={email}
                                name="email"
                                onChange={this.onChange} 
                                aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Confirm Password</label>
                            <input 
                                type="password"
                                className="form-control" 
                                value={password2} 
                                name="password2"
                                onChange={this.onChange} 
                                rows="3" placeholder="Enter your confirm password"/>
                    </div>
                        <button type="submit" className="btn btn-success mt-2">Submit</button>
                        <p className="">Already have an account?
                            <Link to="/">Log In</Link>
                        </p>
                    </form>
                </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {registerUser})(Register);
