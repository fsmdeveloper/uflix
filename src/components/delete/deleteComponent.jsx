import React, { Component } from 'react';
import firebase from 'firebase/app';
import { Link } from "react-router-dom";

class Delete extends Component {
  constructor() {
    super();
    this.db = firebase.firestore();
    this.state = {
      message: ''
    }
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const docRef = await this.db.collection('movies').doc(id).delete();

    this.setState({
      message: 'This Movie Successfully Deleted'
    })


    console.log(this.state);


  }
  render() {
    return (
      <div className="delete">
        <div className="container">
          <div className="row">
            <div className="msg">
              <h3> {this.state.message}</h3>
              <Link to={`/`}>
                <button className="ui button">
                  Go Home
              </button>
              </Link>
            </div>




          </div>
        </div>

      </div>
    );
  }
}

export default Delete;