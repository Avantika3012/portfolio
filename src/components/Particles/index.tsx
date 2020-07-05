import React from 'react';
import MouseParticles from 'react-mouse-particles';

const Particles: React.FC = () => {
  return (
    <MouseParticles
      g={2.3}
      num={1}
      radius={8}
      life={0.5}
      v={1.2}
      alpha={0.16}
      color="random"
      cull="resume-footer,resume-header,about-button,video-carousel,resume-modal,modal-submit-button,modal-close-button"
    />
  );
};

export default Particles;
