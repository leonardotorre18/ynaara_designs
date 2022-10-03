import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../views/Home';
import Store from '../views/Store';

export default function Natigation() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store' element={<Store />} />
    </Routes>
  )
}
