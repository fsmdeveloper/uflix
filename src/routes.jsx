import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/home/homeComponent';
import SingleMovie from './components/movie/singleMovieComponent';
import Edit from './components/edit/editComponent';
import Delete from './components/delete/deleteComponent';
import Create from './components/create/createComponent';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/create" component={Create} exact />
          <Route path="/movie/:id" component={SingleMovie} exact />
          <Route path="/edit/:id" component={Edit} exact />
          <Route path="/delete/:id" component={Delete} exact />
        </div>
      </Router>
    );
  }
}

export default Routes;