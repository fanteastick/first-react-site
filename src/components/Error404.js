import TopHead from './TopHead.js'
import ContactMe from './ContactMe.js'
import React, { Component } from 'react';
import Navbar from './Navbar.js'

class Error404 extends Component {
    render() {
      return (
        <div className="Home">
          <TopHead />
          <Navbar />
          <h1>Oops! Page not found!</h1>
          <ContactMe />
        </div> 
        );
  }
}
export default Error404