import React, { useEffect } from 'react';
import './app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';

import Settings from './components/settings/Settings';
import NotificationsContainer from './components/notifications-container/NotificationsContainer';
import Connector from './components/connector/Connector';
function App() {
  return (
    <Router>
      <div className="carnelian-studio">
        <Navbar />

        <div className="nav-frame">
          <div className="container">
            <Switch>
              <Route path="/workshop">current : toto</Route>
              <Route path="/account">current : hello</Route>
              <Route path="/settings">
                <Settings />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </div>

        {/* <NotificationsContainer /> */}

        <Footer />
        <Connector />
      </div>
    </Router>
  );
}

export default App;
