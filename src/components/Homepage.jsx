import React from 'react';
import Navbar from './Navbar.jsx';

export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          {/* <h1 className="display-4">The Scandal That Shocked Silicon Valley</h1> */}
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="/elizabeth.jpg" alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>The Scandal That Shocked Silicon Valley</h5>
                <p>One Drop Is All It Takes</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/nanotainer.jpg" alt="Second slide"/>
              <div id="nanotainer" className="carousel-caption d-none d-md-block">
                <h5>Theranos CEO Elizabeth Smart</h5>
                <p>When startup founders put lives at risk</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
          <div className="buttons">
            <a id="button" className="btn btn-dark btn-lg btn" href="/latest" role="button">Latest News</a>
            <a id="button" className="btn btn-dark btn-lg btn" href="/movie" role="button">Movie Updates</a>
          </div>
          
        </div>
        </div>
      </div>
    );
  }
}