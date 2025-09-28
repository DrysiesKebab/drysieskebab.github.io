import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className='main-background'>
        <nav>
          <ul>
            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li> */}
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/about" component={About} /> */}
          {/* <Route component={NotFound} /> fallback for unmatched routes */}
        </Switch>

      </div>
    </Router>
  );
}

export default App;
