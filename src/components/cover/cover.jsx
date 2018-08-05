import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Cover extends Component {

  render() {

    if (this.props.title) {
      return (
        <div className="single-cover">

          <div className="logo-box">
            <Link to="/">
              <img className="logo" src={require('../../img/logo.svg')} alt="logo" />

            </Link>
          </div>


          <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-cover-main">
                {this.props.title}
              </span>
            </h1>
          </div>
        </div>
      );
    }

  }
}

export default Cover;