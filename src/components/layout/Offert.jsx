import React from 'react';
import Particles from 'react-tsparticles';
import { Link } from 'react-router-dom';
import { loadFull } from 'tsparticles';
import OffertSVG from '../../assets/Offert.jpg';
import ParticlesConfig from './ParticlesConfig';

export default function Offert() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="mx-auto w-full flex justify-center overflow-hidden relative">
      <Link to="/store">
        <img
          className="object-cover"
          src={OffertSVG}
          alt="Anuncio de oferta"
        />
      </Link>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={ParticlesConfig}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
          bottom: '0',
          right: '0',
          // 'zIndex': '-1'
        }}
      />
    </div>
  );
}
