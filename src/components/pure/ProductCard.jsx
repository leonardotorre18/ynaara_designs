import React from 'react';
import '../../styles/ProductCard.scss';
import { connect } from 'react-redux/es/exports';
import { setBuy } from '../../store/actions/currentBuy';

function ProductCard({ key, id, title, price, img, setBuy }){
  return (
    <div className="card" key={key}>
      <div className="card__img">
        <img src={img} alt="Imagen para ver" />
      </div>
      <div className="card__body">
        <h3 className="card__body__title">{ title }</h3>
        <p className="card__body__price">{ price } $</p>
      </div>
      <div className="card__buttons">
        <button
          onClick={() => {
            setBuy({
              id, 
              title,
              price: parseInt(price),
              img,
            });
          }}
          type="submit"
        >Agregar al carrito</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBuy: (product) => dispatch(setBuy(product)),
  };
};

export default connect(null,mapDispatchToProps)(ProductCard);
