import React, { Component } from 'react';


class TopHead extends Component({
  render{
    return (

      <ul className="leftaligntext">
        <h2>
          About me:
        </h2>
        <li><h3>Caltech '23</h3></li>
        <li><h3>Pun master :)</h3></li>
        <li><h3>Aspiring electrical engineer!</h3></li>
        <li>
          <h3>
            What I'm doing <a href="nowpg.html"><b>now</b></a>
          </h3>
        </li>
        <li>
          <h3>
            Things I <a href="past-things.html"><b>used to do</b></a>
          </h3>
        </li>
      </ul>
    );
  };


export default OldAbout