import React from 'react';
import {BrowserRouter as Link} from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
            </ul>
          </div>
          <div className="mx-auto order-0">
            <a className="navbar-brand mx-auto" href="fill">Theranos Scandal Tracker</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/latest">Latest News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/movie">Movie</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}