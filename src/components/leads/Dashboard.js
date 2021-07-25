import React, {Fragment} from 'react'
import { Route } from 'react-router-dom';
import { Switch} from 'react-router';
import Form from './Form';
import Leads from './Leads';

function Dashboard() {
    return (
        <Fragment>
        <Switch>
            <Route path="/form" component={Form}/> 
            <Route  exact path="/" component={Leads} />
        </Switch>
        </Fragment>
        
    )
}

export default Dashboard
