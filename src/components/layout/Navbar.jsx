import React from 'react';
import '../../styles/Navbar.scss';
import IconCart from '../pure/IconCart';

export default function Navbar({ setShowShoppingCart} ) {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="list">
          <li>Inicio</li>
          <li>Productos</li>
          <li>Atención Personalizada</li>
          {/* <li>Colaboraciones</li> */}
        </ul>
        <IconCart setShowShoppingCart={setShowShoppingCart} />
      </nav>
    </header>
  );
}
