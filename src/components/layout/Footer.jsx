import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-first">
      <div className="mx-auto max-w-7xl px-2 py-10">
        {/* <ul className="m-3 flex gap-3 justify-center">
          <li>Acerca de</li>
          <li>Proyectos</li>
          <li>Galería</li>
          <li>Contacto</li>
        </ul> */}
        <p className="text-center m-3 text-white flex gap-2 w-full justify-center">
          Hecho por
          <a
            target="_bank"
            className="font-bold"
            href="https://leonardotorre.netlify.app/"
          >
            LeonardoTorre
          </a>
        </p>
      </div>
    </footer>
  );
}
