import React, { Component } from 'react';
import Roses from "./roses.jpg";
class Header extends Component {
  render() {
      return (
            <div className="Header">
                <img src={Roses} className="thumb"/> 
            </div>    
            );  
        }
    }
export default Header;