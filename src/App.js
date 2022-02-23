import React from "react";
import ParticleBG from "./components/ParticleBG";

function App() {

    return(
        <div>
        <ParticleBG/>
        <div className="mainPage">
            <h1 className="bigName">greg sherman</h1>
            <p className="subText">under construction</p>
            <a href="https://github.com/GregSherman" target="_blank" rel="noopener noreferrer" className="link">GitHub  </a>
            <a href="https://github.com/GregSherman/gregsherman.ca/raw/6a2bcb2c70ded4487d891aacc15f262b3b11e46b/src/resources/gregresume.pdf" target="_blank" rel="noopener noreferrer" className="link">  Resume  </a>
            <a href="https://www.linkedin.com/in/greg-sherman-aa20101b5/" target="_blank" rel="noopener noreferrer" className="link">  LinkedIn  </a>
            <a href="mailto: greg.sherman@mail.utoronto.ca" target="_blank" rel="noopener noreferrer" className="link">  Email  </a>
        </div>
        </div>
    );
}

export default App;