import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from '../views/Cart';
import Home from '../views/Home';
import Product from '../views/Product';

export default function Natigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path=":idProduct" element={<Product />} />
    </Routes>
  );
}
