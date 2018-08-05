import React, { Component } from 'react';
import firebase from 'firebase/app';
import { Link } from "react-router-dom";

class Edit extends Component {

  constructor() {
    super();
    this.db = firebase.firestore();
  }

  componentDidMount() {
    const id = this.props.match.params.id;

  }
  render() {
    return (
      <div>
        <h1>All Ok, but Sorry!!! This part under construction <i class="frown icon"></i></h1> <br />
        <Link to={`/`}>
          <button className="ui button">
            Go Home
          </button>
        </Link>
      </div>
    );
  }
}

export default Edit;