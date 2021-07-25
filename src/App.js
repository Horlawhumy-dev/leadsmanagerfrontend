import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/layouts/Header';
import Dashboard  from './components/leads/Dashboard';
import Account from './components/Accounts/Account';
import { useAlert } from 'react-alert';


function App() {
 const alert = useAlert()
  return (
      <Router>
        <Fragment>
          <Header />
          <div className="container">
            <Dashboard />
            <Account />
          </div>
        </Fragment>
      </Router>
  );
}

export default App;
