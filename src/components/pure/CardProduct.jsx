import React from 'react';
import propTypes from 'prop-types';
import '../../styles/CardProduct.scss';

export default function CardProduct({ img, title, price }) {
  return (
    <div className="card-product">
      <div className="card-product__img">
        <img src={img} alt="" />
      </div>
      <div className="card-description">
        <h3 className="card-description__title">{ title }</h3>
        <p className="card-description__price">{ price } $</p>
      </div>
    </div>
  );
}
CardProduct.propTypes = {
  img: propTypes.element,
  title: propTypes.string,
  price: propTypes.number
}
