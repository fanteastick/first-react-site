
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// thanks to this guide; https://www.freecodecamp.org/news/react-router-in-5-minutes/
class Navbar extends Component {
    render() {
      return (
        <div className="Home">
          <Link to="/" className="hoverHighlight">Home</Link>
          <Link to="/projects" className="hoverHighlight"> · Projects</Link>
          <a rel="noopener noreferrer" href="https://blog.eilleeenz.com" target="_blank"> · Blog</a>
        </div> 
        );
  }
}
export default Navbar
