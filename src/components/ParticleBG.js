import React from "react";
import { Particles } from "react-tsparticles";
import particleConfig from "./particle-config";

const ParticleBG = () => {
    return (
        <Particles options={particleConfig}/>);
}

export default ParticleBG;