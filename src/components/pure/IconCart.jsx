import React from 'react';
import { connect } from 'react-redux/es/exports';
import imgCart from '../../assets/iconmonstr-shopping-cart-2.svg';
import '../../styles/IconCart.scss';
import GetTotalProducts from '../../utils/GetTotalProducts';

function IconCart({ products, setShowShoppingCart }) {
  
  return (
    <div 
      className="icon-cart"
      onClick={() => {
        setShowShoppingCart(prev=> !prev)
      }}
    >
      <img src={imgCart} alt="Imagen Como Icono" />
      <span 
        className="number"
      >{ GetTotalProducts(products) }</span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { products: state.products }
};

export default connect(mapStateToProps, null)(IconCart);
