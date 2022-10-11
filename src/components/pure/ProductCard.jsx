import React from 'react';
import '../../styles/ProductCard.scss';
import { connect } from 'react-redux/es/exports';
import { setBuy } from '../../store/actions/currentBuy';
import OwlCarousel from 'react-owl-carousel3';

function ProductCard({key, id, name, price, img, sizes, setBuy }){
  return (
    <div className="card" key={key}>
      {
        img.length > 1 ? (
          <OwlCarousel
          items={1}
            className='carousel'
            autoplay
            autoplayTimeout={Math.round(Math.random() * (8 - 3) + 3) * 1000}
            autoplaySpeed={1000}
            loop
          >
            {img.map((i, key) => <div className='card__img' key={key}>
              <img src={i} alt="Imagen YNaara Designs" />
              </div>)}
          </OwlCarousel>
        ) : <div className="card__img">
          <img src={img[0]} alt="Imagen YNaara Designs" />
        </div>
      }
      <div className="card__body">
        <h3 className="card__body__title">{ name }</h3>
        <p className="card__body__price">{ price }$</p>
      </div>
      <div className="card__buttons">
        <button
          onClick={() => {
            setBuy({
              id, 
              name,
              price: parseInt(price),
              img,
              sizes
            });
          }}
          type="submit"
        >Comprar</button>
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
