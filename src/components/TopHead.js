import React, { Component } from 'react';
import MePic from "./pic-of-me-2022.png";
class TopHead extends Component {
    render() {
      return (
        <div className="TopHead">
          <h1 className="centertext">Hi, I'm Eilleen Zhang.</h1>
          <img src={MePic} alt="" className="profilepic centerimg"/>
          <p className="centertext" >
              <span style={{backgroundColor: '#FFB48B'}} >
              This is what I look like ☝️</span>
          </p>  
        </div> 
        );
  }
}
export default TopHead