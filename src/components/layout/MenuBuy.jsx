import React, { useEffect, useRef, useState } from 'react';
import '../../styles/MenuBuy.scss';
import { connect } from 'react-redux/es/exports';
import { addToCart } from '../../store/actions/shoppingCart';
import { clearBuy } from '../../store/actions/currentBuy';
import { useNotification } from '../containers/NotificationProvider';

function MenuBuy({ state, addProduct, clearBuy }) {
  
  const [isVisible, setVisible] = useState(false)
  const counter = useRef(1);
  const size = useRef('S');

  const dispatch = useNotification()
  

  useEffect(()=> {
    setVisible(Object.entries(state).length !== 0)
  },[state])

  return (
    <div 
      className={isVisible ? 'menu-buy' : 'menu-buy menu-buy--hidden' }
    >
      <h2 className="title">Menu Buy</h2>
      <div className="menu-buy__body">
        <div className="menu-buy__body__img">
          <img src={state.img} alt="Imagen del Producto" />
        </div>
        <h3 className="title">{ state.title }</h3>
        {/* Select product size */}
        <div className="menu-buy__body__select">
          <span>Talla</span>
          <select ref={size}>
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
        </div>
        {/* Select how many products */}
        <div className="menu-buy_body__count">
          <span 
            className="down"
            onClick={() => counter.current.value > 1 ? counter.current.value-- : null}
          >-</span>
          <input 
            type="number" 
            ref={counter} 
            defaultValue={1}
            min={1}
            readOnly
          />
          <span 
          className="up"
          onClick={() => counter.current.value++}
          >+</span>
        </div>
        {/* Buttons */}
        <div className="menu-buy__body__buttons">
          <button 
            type="submit"
            onClick={()=>{
              clearBuy();
              counter.current.value = 1;
              size.current.value = 'S';
            }}
          >Cancelar compra</button>
          <button 
            onClick={()=>{
              addProduct({
                ...state,
                count: counter.current.value,
                size: size.current.value
              })
              dispatch({ type: "ADD_NOTIFICATION", payload: {message: `${state.title} agregado al carrito`} })
              clearBuy();
              counter.current.value = 1;
              size.current.value = 'S';
            }}
            type="submit">Agregar al Carrito</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    state: state.currentBuy
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => dispatch(addToCart(product)),
    clearBuy: () => dispatch(clearBuy())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBuy);
