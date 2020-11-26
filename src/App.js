import React from 'react';
import './App.css';
import Pagetwo from './Container/Pagetwo';
import Registration from './Container/Registration';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import VerifyPage from './Container/VerificationPage';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Registration} />
          <Route path="/next" component={Pagetwo} />
          <Route path="/verify" component={VerifyPage} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
