import React, { useRef } from 'react';
// import propTypes from 'prop-types';
import '../../styles/CardProduct.scss';
import { connect } from 'react-redux/es/exports';
import { AddToCart } from '../../store/actions';

function CardProduct({ key, id, img, title, price, addToCart }){

  const counter = useRef(1);
  
  return (
    <div className="card" key={key}>
      <div className="card__img">
        <img src={'img/'+img} alt="Imagen para ver" />
      </div>
      <div className="card__body">
        <h3 className="card__body__title">{ title }</h3>
        <p className="card__body__price">{ price } $</p>
      </div>
      <div className="card__buttons">
        <button
          onClick={() => {
            addToCart(id, price, counter.current.value);
            counter.current.value = 1 
          }}
          type="submit"
        >Agregar al carrito</button>
        <div className="card__buttons__counter">
          <span 
            className="down"
            onClick={() => counter.current.value > 1 ? counter.current.value-- : null}
          >-</span>
          <input 
            type="number" 
            ref={counter} 
            defaultValue={1}
            min={1}
          />
          <span 
          className="up"
          onClick={() => counter.current.value++}
          >+</span>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, price, count) => dispatch(AddToCart(id, price, parseInt(count))),
  };
};

export default connect(null, mapDispatchToProps)(CardProduct);