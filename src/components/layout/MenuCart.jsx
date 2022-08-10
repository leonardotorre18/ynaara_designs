import React, { useEffect, useState } from 'react'
import '../../styles/MenuCart.scss';
import ShortCard from '../pure/ShortCard';
import { connect } from 'react-redux/es/exports';
import ProductJSON from '../../api/Products.json';
import GenerateList from '../../utils/GenereteList';
import { ResetCart } from '../../store/actions';
import GenerateMessageWhatsapp from '../../utils/GenerateMessageWhatsapp';
import GetFinalPrice from '../../utils/GetFinalPrice';

function MenuCart({ products, visibilityMenuCart, resetCart }) {

  const [productsState, setProductsState] = useState([])

  useEffect(()=> {
    setProductsState(GenerateList(products, ProductJSON))
  },[products])
  
  return (
    <div className={visibilityMenuCart ? 'menu-cart menu-cart--visible' : 'menu-cart'}>
      <h3 className="menu-cart__title">Shopping Cart</h3>
      <div className="menu-cart__list">
        {
          productsState.map((element, index) => {
            return <ShortCard 
              key={index} 
              id={element.id}
              size={element.size}
              title={element.name} 
              count={element.count} 
              img={element.img}
            />
          })
        }
      </div>
      <div className="menu-cart__buttons">
        <button
          className="buy"
          onClick={()=> {
            window.open(GenerateMessageWhatsapp(productsState,GetFinalPrice(productsState)));
            resetCart();
          }}
        >Comprar todo</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { products: state.products, visibilityMenuCart: state.menuCart }
}
const mapDispatchToProps = (dispatch) => {
  return { resetCart: () => dispatch(ResetCart()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuCart)
