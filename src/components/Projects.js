import TopHead from './TopHead.js'
import ContactMe from './ContactMe.js'
import Navbar from './Navbar.js'
import React, { Component } from 'react';


class Projects extends Component {
    render() {
      return (
        <div className="Home">
          <TopHead />
          <Navbar />
          <h3>This page is under construction!</h3>
	         <p>Come back here later to see:</p>
           <ul>
              <li>
                various projects that i've worked on
              </li>
           </ul>



          <ContactMe />
        </div> 
        );
  }
}
export default Projects