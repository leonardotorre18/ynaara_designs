import React from 'react';
import { connect } from 'react-redux/es/exports';
import {AiOutlineShoppingCart} from 'react-icons/ai';

function IconCart({ products, toggleShow }) {
  return (
    <div className="relative pt-1">
      <span className="absolute bg-white text-first rounded-full w-5 h-5 text-xs flex justify-center items-center -top-1 -right-1/3">{ products.length }</span>
      <AiOutlineShoppingCart />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { products: state.shoppingCart }
};

export default connect(mapStateToProps, null)(IconCart);
