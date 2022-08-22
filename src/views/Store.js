import React, { useEffect, useState } from 'react';
import Grid from '../components/containers/Grid';
import Container from '../components/containers/Container';
import ProductCard from '../components/pure/ProductCard';
import SearchBar from '../components/pure/SearchBar';
import getListing from '../utils/getListing';
import Message from '../components/pure/Message';

export default function Products() {
  const [listing, setListing] = useState(getListing());
  const [filter, setFilter] = useState('');

  useEffect(()=> {
    setListing(getListing())
    setListing(state => {
      return state.filter(e => e.name.toLowerCase().includes(filter.toLowerCase()))
    })
  },[filter])

  return (
    <Container>
      <h1 className="title">Tienda</h1>
    
    <SearchBar setFilter={setFilter} />
      
      { 
      listing.length > 0
      ?
      <Grid>
        { listing.map((product, index) => {
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
