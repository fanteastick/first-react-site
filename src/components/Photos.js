import TopHead from './TopHead.js'
import ContactMe from './ContactMe.js'
import Navbar from './Navbar.js'
import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import roses from "./roses.jpg";

// comes from https://www.npmjs.com/package/react-photo-gallery
          
const photos = [
  {
    src: roses,
    height: 3,
    width: 4
  },
  {
    src: roses,
    width: 4,
    height: 3
  }
];
 
class Photos extends Component {
    render() {
      return (
        <div className="Home">
          <TopHead />
          <Navbar />
          <h3>Some of the pictures I took</h3>
	      <Gallery photos={photos} />
          <ContactMe />
        </div> 
        );
  }
}
export default Photos