import React, { memo } from 'react';
import '../../styles/Jumbotron.scss';
import logo from '../../assets/logo.svg';

export default memo(function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="jumbotron__img">
        <img src={logo} alt="Ynaara Desings Logo" />
      </div>
      {/* <h1 className="jumbotron__title">Ynaara Desings</h1> */}
    </div>
  );
})
