import React, { useRef } from 'react';
// import propTypes from 'prop-types';
import '../../styles/ProductCard.scss';
import { connect } from 'react-redux/es/exports';
import { AddToCart } from '../../store/actions';

function ProductCard({ key, id, img, title, price, addToCart }){

  const counter = useRef(1);
  const size = useRef('S');
  
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
            addToCart(id, title, size.current.value, price, counter.current.value);
            counter.current.value = 1 
          }}
          type="submit"
        >Agregar al carrito</button>
        <div className="card__buttons__select">
          <span>Talla</span>
          <select ref={size}>
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
        </div>
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
            readOnly
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
    addToCart: (id, name, size, price, count) => dispatch(AddToCart(id, name, size, price, parseInt(count))),
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);
