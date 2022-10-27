import React from 'react';
import { connect } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { clearBuy } from '../../store/actions/currentBuy';
import logo from '../../assets/logo-light.svg';
import IconCart from '../pure/IconCart';

function Navbar({ clearBuy }) {

  return (
    <header className="bg-first h-16 shadow sticky top-0 left-0 w-full z-50" onClick={clearBuy}>
      <nav className="flex justify-between items-center px-4 h-full">
        <div className="h-12 md:h-16 px-3 pb-1">
          <img 
            src={logo}
            alt="YNaara Designs"
            className="object-cover h-full"
          />
        </div>
        <ul className="flex gap-3 justify-end">
          <Link to={'/'} className="text-3xl text-firstlight font-first hover:text-white transition-colors">Inicio</Link>
          <Link to={'/store'} className="text-3xl text-firstlight font-first hover:text-white transition-colors">Tienda</Link>
          <Link to={'/cart'} className="text-3xl text-firstlight font-first hover:text-white transition-colors">
            <IconCart />
          </Link>
        </ul>
      </nav> 
    </header>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearBuy: () => dispatch(clearBuy())
  }
}

export default connect(null, mapDispatchToProps)(Navbar)
