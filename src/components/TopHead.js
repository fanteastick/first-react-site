import React, { Component } from 'react';
import MePic from "./eilleen-google-copy.jpg";
class TopHead extends Component {
    render() {
      return (
        <div className="TopHead">
          <link rel="stylesheet" href="style.css" />
          <h1 className="centertext">Hi, I'm Eilleen Zhang.</h1>
          <img src={MePic} className="profilepic centerimg"/>
          
        </div> );
  }
}
export default TopHead