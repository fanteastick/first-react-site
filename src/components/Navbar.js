
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// thanks to this guide; https://www.freecodecamp.org/news/react-router-in-5-minutes/
class Navbar extends Component {
    render() {
      return (
        <div className="Home">
          <Link to="/" className="hoverHighlight">Home</Link> · 
          <a rel="noopener noreferrer" href="https://blog.eilleeenz.com" target="_blank">Link Here</a>
        </div> 
        );
  }
}
export default Navbar
