
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import TopHead from './TopHead.js'
import AboutMe from './AboutMe.js'
import ContactMe from './ContactMe.js'
class Navbar extends Component {
    render() {
      return (
        <div className="Home">
          <Link to="/" className="hoverHighlight">Home</Link>
          <Link to="/photos" className="hoverHighlight">Pictures </Link>
        </div> 
        );
  }
}
export default Navbar