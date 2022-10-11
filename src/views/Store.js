import React, { useEffect } from 'react';
import Grid from '../components/containers/Grid';
import Container from '../components/containers/Container';
import ProductCard from '../components/pure/ProductCard';
import SearchBar from '../components/pure/SearchBar';
import Message from '../components/pure/Message';
import useFilter from '../hooks/useFilter';
import useProductList from '../hooks/useProductList';
import MenuBuy from '../components/layout/MenuBuy';
import { connect } from 'react-redux';
import { useState } from 'react';
import { products as productsImport  } from '../data/products';

function Store({currentBuy}) {
  const [filter, setFilter] = useFilter('');
  const [products, setProducts] = useProductList(productsImport);
  const [showBuy, setShowBuy] = useState(false);


  useEffect(()=> {
    setShowBuy(Object.entries(currentBuy).length !== 0)
  },[currentBuy])

  useEffect(() => {
    setProducts(filter)
  },[filter])


  return (
    <>
    {
      showBuy && <MenuBuy state={currentBuy} />
    }
    <Container>
      <h1 className="title">Tienda</h1>
      <SearchBar setFilter={setFilter} />
      
      { 
      products.length > 0
      ?
      <Grid>
        { products.map((product, key ) => {
          return <ProductCard 
            key={key}
            {...product}
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
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    currentBuy: state.currentBuy,
  }
}

export default connect(mapStateToProps, null)(Store);
