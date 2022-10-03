import React from 'react';
import '../../styles/Grid.scss';
// import ProductCard from '../pure/ProductCard';

export default function Grid({ children }) {
  return (
    <div className="grid">
      {children}
    </div>
  );
}
