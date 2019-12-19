import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Home from './components/Home'
export default class App extends Component {
  
  render() {

    return (
      <div>
        <Router>
          <Home exact path="/" />
        </Router>
      </div>
    );
  }
}