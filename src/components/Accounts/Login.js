import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class Login extends Component {
    state = {
        username: "",
        password1: "",
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }
    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }
    
    render() {
        const {username, password1} = this.state;
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
                            value={password1} 
                            name="password1"
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

export default Login;
