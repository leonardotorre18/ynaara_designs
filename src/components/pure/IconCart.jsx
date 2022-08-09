import React from 'react';
import { connect } from 'react-redux/es/exports';
import imgCart from '../../assets/iconmonstr-shopping-cart-2.svg';
import '../../styles/IconCart.scss';
import GetTotalProducts from '../../utils/GetTotalProducts';
import { ToggleMenuCart } from '../../store/actions'

function IconCart({ products, toggleMenuCart }) {
  
  return (
    <div 
      className="icon-cart"
      onClick={toggleMenuCart}
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
const mapDispatchToProps = (dispatch) => {
  return { toggleMenuCart: () => dispatch(ToggleMenuCart()) }
};

export default connect(mapStateToProps, mapDispatchToProps)(IconCart);
