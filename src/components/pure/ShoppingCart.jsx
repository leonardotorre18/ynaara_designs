import React, { useEffect, useState } from 'react'
import '../../styles/ShoppingCart.scss';
import CardList from './CardList';
import { connect } from 'react-redux/es/exports';
import ProductJSON from '../../api/Products.json';
import GenerateList from '../../utils/GenereteList'

function ShoppingCart({ products }) {

  const [state, setState] = useState([])

  useEffect(()=> {
    setState(GenerateList(products, ProductJSON))
  },[products])
  
  return (
    <div className='shopping-cart'>
      <h3 className="title">Shopping Cart</h3>
      <div className="list">
        {
          state.map((element, index) => <CardList key={index} title={element.name} count={element.count} />)
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { products: state.products }
}

export default connect(mapStateToProps, null)(ShoppingCart)
