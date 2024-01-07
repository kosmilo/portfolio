import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBg = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const options = {
    autoPlay: true,
    fpsLimit: 60,
    fullScreen: {
      enable: true,
      zIndex: -10,
    },
    background: {
      color: "#101010",
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        resize: true,
      },
    },
    particles: {
      color: {
        value: "ff2e1f",
      },
      number: {
        density: {
          enable: true,
          value_area: 1080,
        },
        limit: 0,
        value: 5,
      },
      opacity: {
        animation: {
          enable: true,
          minimumValue: 0.05,
          speed: 0.2,
          sync: false,
          startValue: "min",
        },
        random: {
          enable: true,
          minimumValue: 0.005,
        },
        value: 0.4,
      },
      size: {
        animation: {
          count: 0,
          enable: true,
          speed: 20,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto",
          startValue: "min",
          destroy: "none",
        },
        value: {
          min: 1,
          max: 400,
        },
      },
      move: {
        enable: true,
      },
      shape: {
        type: "circle",
      },
    },
  };

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default ParticleBg;
