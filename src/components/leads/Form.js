import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../Store/actions/leads';
class Form extends Component {
    state = { 
        name: "",
        email: "",
        message: ""
    }
    static propTypes = {
        addLead: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();
        const { name, email, message } = this.state;
        const lead = { name, email, message }
        this.props.addLead(lead);
        this.setState({
            name: "",
            email: "",
            message: ""
        })
    }
    render() {
        const { name, email, message } = this.state;
        return (
            <Fragment>
                <h3>Add Lead</h3>
                <form method="POST" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={name}
                        name="name"
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
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea 
                            className="form-control" 
                            id="exampleFormControlTextarea1"
                            value={message} 
                            name="message"
                            onChange={this.onChange} 
                            rows="3" placeholder="Enter your message"></textarea>
                  </div>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
            </Fragment>
        )
    }
}

export default connect(null, { addLead })(Form);
