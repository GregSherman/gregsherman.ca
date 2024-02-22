import React from "react";
import ParticleBG from "./components/ParticleBG";

function App() {
  return (
    <div>
      <div class="name-container">
        <span class="first-name">Greg</span>
      </div>
      <ParticleBG />
      <ul class="links-container">
        <li>
          <a
            href="https://github.com/GregSherman"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/gregsherman-/"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="/documents/Greg Sherman Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="mailto:swe@gregsherman.ca"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
          >
            Email
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
