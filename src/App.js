import React, { Fragment } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/layouts/Header';
import Dashboard  from './components/leads/Dashboard';
import Account from './components/Accounts/Account';
import PrivateRoutes from './components/Common/PrivateRoutes';
import { useAlert } from 'react-alert';


function App() {
 const alert = useAlert()
  return (
      <Router>
        <Fragment>
          <Header />
          <div className="container">
            <PrivateRoutes exact path="/">
              <Dashboard />
            </PrivateRoutes>
            <Account />
          </div>
        </Fragment>
      </Router>
  );
}

export default App;
