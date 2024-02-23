import React, { Component } from "react";
import FluidAnimation from "react-fluid-animation";
import "./App.css";

const defaultConfig = {
  textureDownsample: 0.2,
  densityDissipation: 1,
  velocityDissipation: 1,
  pressureDissipation: 0.9,
  pressureIterations: 25,
  curl: 40,
  splatRadius: 0.01,
};

export default class App extends Component {
  state = {
    config: defaultConfig,
  };

  render() {
    const { config } = this.state;
    let resizeTimer;

    // On finish resize, the canvas is destroyed and re-created, so we need to re-add the splats
    const handleResize = () => {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        this._animation.addSplats(
          Array.from({ length: 20 }, () => this._getRandomSplat())
        );
      }, 50);
    };
    window.addEventListener("resize", handleResize);

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

  _getRandomSplat(restrictToName = false) {
    const container = document.getElementById("wave-container");
    const canvas = container.querySelector("canvas");
    const width = canvas.width;
    const height = canvas.height;

    var color = [
      1 + Math.random() * 1,
      Math.random() * 1,
      2 + Math.random() * 7,
    ];
    var x = width * Math.random();
    var y = height * Math.random();
    var dx = 2000 * (Math.random() - 0.5);
    var dy = 2000 * (Math.random() - 0.5);

    // If required, ensure that the splats move over the name to make it more visible
    if (restrictToName) {
      x = width * (0.4 + Math.random() * 0.2);
      y = height * (0.4 + Math.random() * 0.2);
    }

    return {
      x: x,
      y: y,
      dx: dx,
      dy: dy,
      color: color,
    };
  }

  _animationRef = (ref) => {
    this._animation = ref;

    const splats = [];
    for (var i = 0; i < 60; i++) {
      splats.push(this._getRandomSplat());
    }
    this._animation.addSplats(splats);
  };

  componentDidMount() {
    this._interval = setInterval(() => {
      this._animation.addSplats([this._getRandomSplat(true)]);
    }, 4000 + Math.random() * 4000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }
}
