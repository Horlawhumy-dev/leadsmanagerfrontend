import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Register extends Component {
    state = {
        username: "",
        email: "", 
        password1: "",
        password2: ""
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }
    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
       const {username, email, password1, password2} = this.state;
        return (
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
                            value={password1} 
                            name="password1"
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
                        <Link to="/login">Log In</Link>
                    </p>
                </form>
        )
    }
}

export default Register;
