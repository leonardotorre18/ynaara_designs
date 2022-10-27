import React from 'react';
import OffertSVG from '../../assets/Offert.jpg';
import ParticlesConfig from './ParticlesConfig'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useNavigate } from 'react-router';


export default function Offert() {
  const history = useNavigate();

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  return (
    <div className="mx-auto w-full flex justify-center overflow-hidden relative">
      <div className='max-w-md p-4'
        onClick={()=>history('/store')}
      >

      <img
        className="object-cover"
        src={OffertSVG}
        alt="Anuncio de oferta"
      />
      </div>
      <Particles 
        id="tsparticles"
        init={particlesInit} 
        options={ParticlesConfig}
        style={{
          'width': '100%',
          'height': '100%',
          'position': 'absolute',
          'top': '0',
          'left': '0',
          'bottom': '0',
          'right': '0'
          // 'zIndex': '-1'
        }}
      />
    </div>
  )
}