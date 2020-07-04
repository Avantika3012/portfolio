import React from 'react';
import MouseParticles from 'react-mouse-particles';


const Particles: React.FC = () => {

  return (
    <MouseParticles g={1} num={4}  radius={5} v={.8} color={["#81d6d3", "#ffffff","#625262", "#c5ccd9"]} cull="stats,image-wrapper" />
  );
};

export default Particles;
