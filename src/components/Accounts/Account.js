import React, {Fragment} from 'react'
import Login from './Login'
import Register  from './Register'
import { Switch } from 'react-router'
import {Route} from 'react-router-dom'


export default function Account() {
    return (
        <Fragment>
            <Switch>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </Fragment>
    )
}
