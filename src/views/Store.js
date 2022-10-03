import React, { useEffect } from 'react';
import Grid from '../components/containers/Grid';
import Container from '../components/containers/Container';
import ProductCard from '../components/pure/ProductCard';
import SearchBar from '../components/pure/SearchBar';
import Message from '../components/pure/Message';
import useFilter from '../hooks/useFilter';
import useProductList from '../hooks/useProductList';

function Products() {
  const [filter, setFilter] = useFilter('');
  const [products, setProducts] = useProductList()

  useEffect(() => {
    setProducts(filter)
  },[filter])


  return (
    <Container>
      <h1 className="title">Tienda</h1>
    
    <SearchBar setFilter={setFilter} />
      
      { 
      products.length > 0
      ?
      <Grid>
        { products.map((product, index ) => {
          return <ProductCard 
            key={index}
            id={product.id} 
            title={product.name}
            price={product.price}
            img={product.img}
            size={product.size}
          />
        })}
      </Grid>
      :
      filter.length > 0 
      ?
      <Message>No hay coincidencias con "{filter}"</Message>
      :
      <Message>No hay articulos disponibles</Message>
      }
  </Container>
  )
}


export default Products
