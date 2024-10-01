import React, { Component } from "react";
import FluidAnimation from "react-fluid-animation";
import "./App.css";

const defaultConfig = {
  textureDownsample: 0.2,
  densityDissipation: 1,
  velocityDissipation: 1,
  pressureDissipation: 0.9,
  pressureIterations: 25,
  curl: 20,
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

    let name;
    let links;
    if (process.env.REACT_APP_SITE_NAME === "Kat") {
      name = "KAT BENEVIDES";
      links = {
        Resume: "/documents/Kat Benevides Resume.pdf",
        Email: "mailto:astro@katbenevides.com",
        LinkedIn:
          "https://www.linkedin.com/in/katerina-isabel-benevides-73584918b/",
      };
    } else {
      name = "GREG SHERMAN";
      links = {
        GitHub: "https://github.com/GregSherman",
        LinkedIn: "https://www.linkedin.com/in/gregsherman-/",
        Resume: "/documents/Greg Sherman Resume.pdf",
        Email: "mailto:swe@gregsherman.ca",
      };
    }

    let linkElements = [];
    for (let key in links) {
      linkElements.push(
        <a
          href={links[key]}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          {key}
        </a>
      );
    }

    return (
      <div>
        <div id="wave-container">
          <FluidAnimation
            style={{ height: "100vh", width: "100vw", position: "absolute" }}
            animationRef={this._animationRef}
            config={config}
          />
          <div className="name-container">
            <h1 className="name">{name}</h1>
          </div>
          <div className="links-container">{linkElements}</div>
        </div>
      </div>
    );
  }

  _getRandomSplat(restrictToName = false) {
    const container = document.getElementById("wave-container");
    const canvas = container.querySelector("canvas");
    const width = canvas.width;
    const height = canvas.height;

    var color = [1 + Math.random() * 4, Math.random() * 1, Math.random() * 1];

    if (process.env.REACT_APP_SITE_NAME === "Kat") {
      const deep_blue = [0.25, 0.25, 1.12];
      color = deep_blue.map((c) => c + (Math.random() - 0.5) * 0.5);

      // 1 in 100, make it red
      if (Math.random() < 0.02) {
        color = [1.5, 0.5, 0.5];
      }
    }

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
