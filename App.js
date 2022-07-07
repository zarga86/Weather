import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Weather from './components/Weather';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact >
          <Weather />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
