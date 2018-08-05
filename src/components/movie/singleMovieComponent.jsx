import React, { Component } from 'react';
import Cover from '../cover/cover';
import Loader from '../loader/loaderComponent';
import firebase from 'firebase/app';
import Footer from '../footer/footerComponent';
import { Link } from "react-router-dom";

class SingleMovie extends Component {

  constructor() {
    super();
    this.db = firebase.firestore();
    this.state = {
      movie: []
    }
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const docRef = this.db.collection('movies').doc(id);
    const movie = await docRef.get();
    this.setState({
      movie: [...this.state.movie, movie.data()]
    })

    // console.log(this.state);



  }
  render() {
    if (this.state.movie.length > 0) {
      return (
        <div className="main">

          <Cover title={this.state.movie[0].name}></Cover>

          <div className="single-movie-section">
            <div className="container">
              <div className="row">
                <div className="movie-poster col-md-4">
                  <img className="poster" key={`kjgbkj`} src={this.state.movie[0].thumbnailUrl} alt="" />
                </div>
                <div className="movie-info col-md-8">
                  <div className="movie-info-item">
                    <ul>
                      {this.state.movie.map(m => {
                        return (
                          <li key={m.name}>
                            <b>Movie Name</b>: {m.name} <br />
                            <b>Rating</b>: {m.rating} <br />
                            <b>Year</b>: {m.year} <br />
                            <b>Runtime</b>: {m.runTime} <br />
                            <b>Director</b>: {m.director} <br />
                            <Link to={`/edit/${m.name.toLowerCase().split(" ").join('-')}`}>
                              <div className="ui vertical animated button " >
                                <div className="hidden content">Edit</div>
                                <div className="visible content">
                                  <i className="edit icon"></i>
                                </div>
                              </div>
                            </Link>
                            <Link to={`/delete/${m.name.toLowerCase().split(" ").join('-')}`}>
                              <div className="ui vertical animated button " >
                                <div className="hidden content">Delete</div>
                                <div className="visible content">
                                  <i className="trash icon"></i>
                                </div>
                              </div>
                            </Link>

                          </li>
                        )
                      })}


                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <Footer />
        </div>

      )
    } else {
      return (
        <div className="single-loader">
          <Loader />
        </div>
      )
    }


  }
}

export default SingleMovie;