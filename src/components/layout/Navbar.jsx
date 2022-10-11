import React from 'react';
import '../../styles/Navbar.scss';
import { connect } from 'react-redux/es/exports';
import IconCart from '../pure/IconCart';
import { Link } from 'react-router-dom';
import { clearBuy } from '../../store/actions/currentBuy';
import logo from '../../assets/logo-light.svg'

function Navbar({ clearBuy }) {
  return (
    <header className="header" onClick={clearBuy}>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="list">
          <Link to={'/'}>Inicio</Link>
          <Link to={'/store'}>Tienda</Link>
        </ul>
        <IconCart />
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
