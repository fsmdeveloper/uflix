import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from '../header/headerComponent';
import Footer from '../footer/footerComponent';

import firebase from 'firebase/app';
// import _ from 'lodash';
import Loader from '../loader/loaderComponent';
class Movies extends Component {

  constructor() {
    super();
    this.db = firebase.firestore();
    this.state = {
      movies: []
    }
  }



  async componentDidMount() {
    const moviesAll = await this.db.collection('movies').get();
    moviesAll.forEach(doc => {
      this.setState({
        movies: [...this.state.movies, doc.data()]
      })
    });
  }

  render() {
    if (this.state.movies.length > 0) {

      return (
        <div className="header">
          <Header></Header>

          <div className="movies">

            <div className="container">
              <div className="row">
                <h1 className="title">Latest Movies</h1>
              </div>
              <div className="row">
                <Link to={`/create`}>
                  <div className="create">
                    <button className="ui labeled icon button">
                      <i className="codepen icon"></i>
                      Create movie
                  </button>
                  </div>
                </Link>
              </div>
              <div className="movies-list">
                <div className="row">

                  {this.state.movies.map(m => {
                    return <div key={m.name} className="col-md-3 col-sm-6">
                      <Link to={`movie/${m.name.toLowerCase().split(" ").join('-')}`}>
                        <div className="ui link cards">
                          <div className="card">
                            <div className="image">
                              <img src={m.thumbnailUrl} alt={m.name} />
                            </div>
                            <div className="content">
                              <div className="header">
                                {m.name}
                                <div className="extra content">
                                  <span className="left floated">
                                    <i className="calendar alternate icon"></i> {m.year}
                                  </span>
                                  <span className="right floated">
                                    <i className="heart icon"></i> {m.rating}
                                  </span>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  })}
                </div>
              </div>
            </div>

          </div>
          <div className="footer">
            <Footer></Footer>
          </div>
        </div>


      );

    } else {
      return (
        <div className="">
          <Loader />
        </div>
      );
    }
  }
}

export default Movies;