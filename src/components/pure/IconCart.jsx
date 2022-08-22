import React from 'react';
import { connect } from 'react-redux/es/exports';
import imgCart from '../../assets/iconmonstr-shopping-cart-2.svg';
import { toggleMenuCart } from '../../store/actions/showMenuCart';
import '../../styles/IconCart.scss';

function IconCart({ products, toggleShow }) {
  
  return (
    <div 
      className="icon-cart"
      onClick={toggleShow}
    >
      <img src={imgCart} alt="Imagen Como Icono" />
      <span 
        className="number"
      >{ products.length }</span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { products: state.shoppingCart }
};

const mapDispatchToProps = (dispatch) => {
  return { toggleShow: () => dispatch(toggleMenuCart()) }
};

export default connect(mapStateToProps, mapDispatchToProps)(IconCart);
