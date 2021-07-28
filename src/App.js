import React, { Component, Fragment } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/layouts/Header';
import Dashboard  from './components/leads/Dashboard';
import Account from './components/Accounts/Account';
import PrivateRoutes from './components/Common/PrivateRoutes';
import store from './Store/store'
import { loadUser } from './Store/actions/auth'
import { useAlert } from 'react-alert';


class App extends Component {
  
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render(){
    return (
      <Router>
        <Fragment>
          <Header />
          <div className="container">
            <PrivateRoutes path="/dashboard">
              <Dashboard />
            </PrivateRoutes>
            <Account />
          </div>
        </Fragment>
      </Router>
  );
  }
  
}

export default App;
