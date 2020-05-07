import React, { Component } from 'react';
import MePic from "./eilleen-google-copy.jpg";
class TopHead extends Component {
    render() {
      return (
        <div className="TopHead">
          <h1 className="centertext">Hi, I'm Eilleen Zhang.</h1>
          <img src={MePic} className="profilepic centerimg"/>
          <p className="centertext" >
              <span style={{backgroundColor: '#FFB48B'}} >
              This is me</span>
          </p>  
        </div> 
        );
  }
}
export default TopHead