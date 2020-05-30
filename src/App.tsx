import React, { useEffect } from 'react';
import './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Footer from './components/footer/Footer';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';
import Connector from './connector';

function App() {

  useEffect(() => {
    new Connector();
  });

  return (

    <Router>
      <div className="carnelian-studio">
        <div className="app-content">

          <Navbar />
          <div className="nav-frame">
            <div className="container">
              <Switch>
                <Route path="/workshop">
                  current : toto
              </Route>
                <Route path="/account">
                  current : hello
              </Route>
                <Route path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </div>
          </div>

        </div>
        <Footer />

      </div>
    </Router>

  );

}

export default App;
