import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuBuy from '../components/layout/MenuBuy';
import products from '../data/products';

export default function Product() {
  const { idProduct } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    setProduct(products.find(({ id }) => id === parseInt(idProduct, 10)));
  }, []);
  return (
    <div>
      <MenuBuy
        id={product.id}
        name={product.name}
        img={product.img}
        price={product.price}
        sizes={product.sizes}
      />
    </div>
  );
}
