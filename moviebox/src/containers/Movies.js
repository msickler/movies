import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/movies';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';

class Movies extends Component {
  constructor(props) {
    super(props),
    this.state = {
      movies: []
    }
  }

  compnentDidMount() {
    this.props.actions.getMovies
  }

  render() {
    return(
      <div>
      Hello
      </div>
    )
  }
}

export default Movies;
