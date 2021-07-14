import React, { Component } from 'react'
import { connect } from 'react-redux'
// import PropTypes  from 'prop-types ';
import { getLeads } from '../../Store/actions/leads'


export class Leads extends Component {
    // static PropTypes = {
    //     leads: PropTypes.array.isRequired
    // }
    componentDidMount() {
        this.props.getLeads();
    }
    render() {
        return (
            <div>
                <h1>Lead List</h1>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    leads: state.leadsReducer.leads
}) 
export default connect(mapStateToProps, { getLeads })(Leads);
