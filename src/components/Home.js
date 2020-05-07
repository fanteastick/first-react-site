import TopHead from './TopHead.js'
import AboutMe from './AboutMe.js'
import ContactMe from './ContactMe.js'
import Navbar from './Navbar.js'
import React, { Component } from 'react';



class Home extends Component {
    render() {
      return (
        <div className="Home">
          <TopHead />
          <Navbar />
          <AboutMe />
          <ContactMe />
        </div> 
        );
  }
}
export default Home