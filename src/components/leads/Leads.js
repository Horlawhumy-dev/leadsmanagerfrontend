import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../Store/actions/leads'


class Leads extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.getLeads();
    }
    // onEditLead = id => {
    //     this.state
    // }
    render() {
        return (
            <div className="container">
                <h1 classNam="h1">Leads Manager</h1>
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.map(lead => (
                            <tr key={lead.id}>
                                <th scope="row">{lead.id}</th>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.message}</td>
                                <td>
                                    <button onClick={this.props.deleteLead.bind(this, lead.id)} className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    leads: state.leads.leads
}) 
export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
