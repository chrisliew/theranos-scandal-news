import React, { Component } from 'react'; 
import Latest from './components/Latest.jsx';
import Navbar from './components/Navbar.jsx';
import Homepage from './components/Homepage.jsx';
import Movie from './components/Movie.jsx';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Router>
          <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/latest" component={Latest}/>
          <Route path="/movie" component={Movie}/>
          </Switch>
        </Router>
      </div>
      
    );
  }
}
       
export default App;
