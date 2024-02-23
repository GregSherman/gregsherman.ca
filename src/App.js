import React, { Component } from "react";
import FluidAnimation from "react-fluid-animation";
import "./App.css";

const defaultConfig = {
  textureDownsample: 0.2,
  densityDissipation: 0.99,
  velocityDissipation: 0.99,
  pressureDissipation: 0.9,
  pressureIterations: 25,
  curl: 100,
  splatRadius: 0.005,
};

export default class App extends Component {
  state = {
    config: defaultConfig,
  };

  render() {
    const { config } = this.state;
    return (
      <div>
        <div id="wave-container">
          <FluidAnimation
            style={{ height: "100vh", width: "100vw", position: "absolute" }}
            animationRef={this._animationRef}
            config={config}
          />
        </div>
        <div className="name-container">
          <h1 className="name">GREG SHERMAN</h1>
        </div>
        <div className="links-container">
          <a
            href="https://github.com/GregSherman"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gregsherman-/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            LinkedIn
          </a>
          <a
            href="/documents/Greg Sherman Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Resume
          </a>
          <a
            href="mailto:swe@gregsherman.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Email
          </a>
        </div>
      </div>
    );
  }

  _animationRef = (ref) => {
    this._animation = ref;
    this._animation.addRandomSplats(14);
  };

  componentDidMount() {
    this._interval = setInterval(() => {
      const count = Math.floor(Math.random() * 6) + 1;
      this._animation.addRandomSplats(count);
    }, Math.floor(Math.random() * 4000) + 2000);
  }
}
