import React, { Component } from 'react';
import firebase from 'firebase/app';
import { Link } from "react-router-dom";
import Header from '../header/headerComponent';
import Footer from '../footer/footerComponent';
class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      director: '',
      year: '',
      thumbnailUrl: 'http://via.placeholder.com/300x380',
      runTime: '',
      rating: '',
      msg: ''
    };
    this.db = firebase.firestore();

    this.nameChange = this.nameChange.bind(this);
    this.directorChange = this.directorChange.bind(this);
    this.yearChange = this.yearChange.bind(this);
    this.runTimeChange = this.runTimeChange.bind(this);
    this.ratingChange = this.ratingChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {



  }

  async handleSubmit(event) {
    event.preventDefault();
    const url = this.state.name.toLowerCase().split(" ").join('-');
    const created = await this.db.collection('movies').doc(url).set({
      name: this.state.name,
      year: this.state.name,
      thumbnailUrl: this.state.thumbnailUrl,
      rating: this.state.rating,
      director: this.state.director,
      runTime: this.state.runTime,
    });

    this.setState({
      msg: 'Successfully Created! Go home to check'
    })
  }

  nameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }
  directorChange(event) {
    this.setState({
      director: event.target.value,
    });
  }
  yearChange(event) {
    this.setState({
      year: event.target.value,
    });
  }
  runTimeChange(event) {
    this.setState({
      runTime: event.target.value,
    });
  }
  ratingChange(event) {
    this.setState({
      rating: event.target.value,
    });
  }



  render() {

    console.log(this.state);

    return (
      <div className="create-movie">
        <Header></Header>

        <div className="container">
          <form onSubmit={this.handleSubmit}>



            <div className="ui form">
              <div className="two fields">
                <div className="field">
                  <label>Name</label>
                  <input placeholder="Name" defaultValue={this.state.name} onChange={this.nameChange} type="text" />
                </div>
                <div className="field">
                  <label>Director</label>
                  <input placeholder="Director" defaultValue={this.state.director} onChange={this.directorChange} type="text" />
                </div>
              </div>
              <div className="two fields">
                <div className="field">
                  <label>Year</label>
                  <input placeholder="Year" type="text" defaultValue={this.state.year} onChange={this.yearChange} />
                </div>
                <div className="field">
                  <label>Rating</label>
                  <input placeholder="rating" type="text" defaultValue={this.state.rating} onChange={this.ratingChange} />
                </div>
              </div>
              <div className="two fields">
                <div className="field">
                  <label>Thumbnail Url</label>
                  <input disabled defaultValue="http://via.placeholder.com/300x380" type="text" />
                </div>
                <div className="field">
                  <label>Runtime</label>
                  <input placeholder="runtime" type="text" defaultValue={this.state.runTime} onChange={this.runTimeChange} />
                </div>
              </div>
              <button type="submit" className="ui button">
                Publish
            </button>



            </div>
            <h3>{this.state.msg}</h3>

            <Link to={`/`}>
              <button className="ui button">
                Go Home
              </button>
            </Link>
          </form>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Create;