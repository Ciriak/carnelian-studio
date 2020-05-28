import React from 'react';
import './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';

function App() {

  return (

    <Router>
      <div className="carnelian-studio">
        <div className="app-content">
          <Sidebar />

          <Switch>
            <Route path="/about">
              current : toto
              </Route>
            <Route path="/users">
              current : hello
              </Route>
            <Route path="/">
              current : Dashboard
              </Route>
          </Switch>
        </div>
        <Footer />

      </div>
    </Router>

  );

}

export default App;
