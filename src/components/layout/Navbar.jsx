import React, { useState } from 'react';
import '../../styles/Navbar.scss';
import { connect } from 'react-redux/es/exports';
import IconCart from '../pure/IconCart';
import { Link } from 'react-router-dom';
import { clearBuy } from '../../store/actions/currentBuy';
import logo from '../../assets/logo-light.svg';
import BurgerButton from '../pure/BurgerButton';

function Navbar({ clearBuy }) {

  const [clicked, setClicked] = useState(false);

  const changedClicked = () => {
    setClicked(!clicked)
  }
  const falseClicked = () => {
    setClicked(false)
  }



  return (
    <header className="header" onClick={clearBuy}>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className={clicked ? 'list' : 'list hidden'}>
          <Link onClick={falseClicked} to={'/'}>Inicio</Link>
          <Link onClick={falseClicked} to={'/store'}>Tienda</Link>
        </ul>
        <BurgerButton onClick={changedClicked} />
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
