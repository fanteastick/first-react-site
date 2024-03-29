import React, { Component } from 'react';


class ContactMe extends Component{
  render() {
      return (
      <div>
        <h2 className="centertext">
          Find me online:
        </h2>
        <h2 className="centertext">
          <a href="https://www.linkedin.com/in/eilleeen-zhang/" target="_blank" rel="noopener noreferrer"><img src="https://cdn.glitch.com/2e20f625-fc10-43eb-b842-35bf491647b6%2FLI-In-Bug.png?v=1566626703040" className="tinycon" alt="linkedin!"/></a>
          {/*<a href="https://www.facebook.com/eilleenzhang" target="_blank" rel="noopener noreferrer"><img src="https://cdn.glitch.com/2e20f625-fc10-43eb-b842-35bf491647b6%2Ffacebook.png?v=1566621283220" alt="My Facebook!" className="tinycon" /></a>*/}
          <a href="https://github.com/fanteastick" target="_blank" rel="noopener noreferrer"><img src="https://cdn.glitch.com/2e20f625-fc10-43eb-b842-35bf491647b6%2FGitHub-Mark-120px-plus.png?v=1566626934177" alt="My Github!" className="tinycon" /></a>
          <a href="mailto:hello@eilleeenz.com" target="_blank" rel="noopener noreferrer"><img src="https://cdn.glitch.com/2e20f625-fc10-43eb-b842-35bf491647b6%2Fmail%20square%20icon.png?v=1566620935270" alt="Email Me!!" className="tinycon" /></a>
          {/*<a href="#" target="_blank" rel="noopener noreferrer"><img src="https://cdn.glitch.com/2e20f625-fc10-43eb-b842-35bf491647b6%2Fdocument.png?1545723493455" alt="My Resume!" class="tinycon" ></a>*/}
          <a href="https://twitter.com/eilleeenz" target="_blank" rel="noopener noreferrer"><img src="https://cdn.glitch.com/2e20f625-fc10-43eb-b842-35bf491647b6%2FTwitter_Logo_Blue.png?v=1566621155853" alt="My Twitter!" className="tinycon" /></a>
          <a href="https://www.youtube.com/channel/UCnodyk0L18x31aDGVN_Ielw" target="_blank" rel="noopener noreferrer"><img src="https://cdn.glitch.com/2e20f625-fc10-43eb-b842-35bf491647b6%2Fyt_icon_rgb.png?v=1566626856948" alt="My Youtube!" className="tinycon" /></a>
        </h2>
        <hr />
        <p className="centertext">
          <small>© Eilleen Zhang | Made with ❤ by me | Last updated Aug. 2022 </small>
        </p>
      </div>
    );
  }
}

export default ContactMe