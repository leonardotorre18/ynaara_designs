import React, { memo } from 'react';
import logo from '../../assets/logo.svg';

function Jumbotron() {
  return (
    <div className="w-full">
      <div className=" w-full px-5 pt-5 max-w-4xl mx-auto">
        <img src={logo} className="w-full object-cover" alt="Ynaara Desings Logo" />
      </div>
    </div>
  );
}

export default memo(Jumbotron);
