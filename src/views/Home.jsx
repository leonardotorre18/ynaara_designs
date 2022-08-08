import React, { useEffect, useState } from 'react';
import Grid from '../components/containers/Grid';
import ProductsJSON from '../api/Products.json';
import CardProduct from '../components/pure/CardProduct';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ProductsJSON);
  }, []);
  return (
    <div>
      <Grid>
        {products.map((product, index) => {
          return <CardProduct 
            key={index}
            img={product.img}
            title={product.name}
            price={product.price}
            id={product.id} 
          />
        })}
      </Grid>
    </div>
  )
}
