import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header-cover">
        <Link to="/">
          <div className="logo-box">
            <img className="logo" src={require('../../img/logo.svg')} alt="logo" />
          </div>
        </Link>

        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">
              uflix
          </span>
          </h1>
        </div>
      </div>
    );
  }
}

export default Header;