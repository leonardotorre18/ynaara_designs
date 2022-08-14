import React, { useEffect, useState } from 'react';
import Grid from '../components/containers/Grid';
import Section from '../components/containers/Section';
import ProductCard from '../components/pure/ProductCard';
import SearchBar from '../components/pure/SearchBar';
import getListing from '../utils/getListing';

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
    <Section>
      <h2 className="title">Tienda</h2>
    
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
              size={product}
            />
        })}
      </Grid>
      :
      filter.length > 0 
      ?
      <p>No hay coincidencias con "{filter}"</p>
      :
      <p>Noy hay articulos disponibles</p>
      }
  </Section>
  )
}
