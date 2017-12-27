import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Movies from './Movies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Movies} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
