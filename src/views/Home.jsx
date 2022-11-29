import React, { useState } from 'react';
import Jumbotron from '../components/layout/Jumbotron';
// import Offert from '../components/layout/Offert';
import data from '../data/products';
import Store from '../components/layout/Store';

export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState(data);
  return (
    <div>
      <Jumbotron />
      {/* <Offert /> */}
      <Store products={products} />
    </div>
  );
}
