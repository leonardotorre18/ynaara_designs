import React, { useRef } from 'react';
import '../../styles/MenuBuy.scss';
import { connect } from 'react-redux/es/exports';
import { addToCart } from '../../store/actions/shoppingCart';
import { clearBuy } from '../../store/actions/currentBuy';
import { useNotification } from '../containers/NotificationProvider';
import OwlCarousel from 'react-owl-carousel3';
import { useState } from 'react';

function MenuBuy({ state, addProduct, clearBuy }) {
  
  const counter = useRef(1);
  const size = useRef('S');
  const [product, setProduct] = useState(state)
  
  

  const dispatch = useNotification();
  
  
  
  return (
    <div className="menu-buy">
      <h2 className="title">Menu de Compra</h2>
      <div className="menu-buy__body">

        {
          product.img.length > 1 ? (
            <OwlCarousel
              items={1}
              className="owl-theme"
              >
              {
                product.img.map((img, key) => (
                  <div className="menu-buy__body__img" key={key}>
                    <img src={img} alt="Imagen del Producto" />
                  </div>
            
            ))
          }
            </OwlCarousel>
          ): (
            <div className="menu-buy__body__img">
              <img src={product.img[0]} alt="Imagen del Producto" />
            </div>
          )
        }

        <h3 className="title">{ product.name }</h3>
        {/* Select product size */}
        <div className="menu-buy__body__select">
          <span>Talla</span>
          <select ref={size}>
            {
              product.sizes.map(i => (
                <option>{i}</option>
              ))
            }
            {/* <option>S</option>
            <option>M</option>
            <option>L</option> */}
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
              size.current.value = 's';
            }}
          >Cancelar</button>
          <button 
            onClick={()=>{
              addProduct({
                ...product,
                count: counter.current.value,
                size: size.current.value
              })
              dispatch({ type: "ADD_NOTIFICATION", payload: {message: `${product.name} agregado al carrito`} })
              clearBuy();
              counter.current.value = 1;
              size.current.value = 's';
            }}
            type="submit">Agregar</button>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => dispatch(addToCart(product)),
    clearBuy: () => dispatch(clearBuy())
  };
}

export default connect(null, mapDispatchToProps)(MenuBuy);
