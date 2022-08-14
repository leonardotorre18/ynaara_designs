import React from 'react';
import '../../styles/Navbar.scss';
import IconCart from '../pure/IconCart';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="list">
          <Link to={'/'}>Inicio</Link>
          <Link to={'/store'}>Tienda</Link>
          <Link to={'/galery'}>Galería</Link>
        </ul>
        <IconCart />
      </nav>
    </header>
  );
}
