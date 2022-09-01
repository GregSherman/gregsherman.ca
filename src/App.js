import React from "react";
import ParticleBG from "./components/ParticleBG";

function App() {

    return(
        <div>
        <ParticleBG/>
        <div className="mainPage">
            <h1 className="bigName">greg sherman</h1>
            <p className="subText">software engineer</p>
            <a href="https://github.com/GregSherman" target="_blank" rel="noopener noreferrer" className="link">GitHub  </a>
            <a href="https://github.com/GregSherman/gregsherman.ca/blob/b01216b36900449edbe30092b27c4d9eb5af82ba/public/gregresume.pdf" className="link">  Resume  </a>
            <a href="https://www.linkedin.com/in/gregsherman-/" target="_blank" rel="noopener noreferrer" className="link">  LinkedIn  </a>
            <a href="mailto: swe@gregsherman.ca" className="link">  Email  </a>
        </div>
        </div>
    );
}

export default App;