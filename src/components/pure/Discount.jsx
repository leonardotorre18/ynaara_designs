import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import getPrice, { getDiscount } from '../../utils/getPrice';

function Discount({ shoppingCart }) {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    setPrice(getPrice(shoppingCart));
    setDiscount(getDiscount(shoppingCart));
  }, [shoppingCart]);

  return (
    <div className=" max-w-xl mx-auto p-2 my-4 font-second text-base shadow">
      <div className="flex justify-between">
        <h4>Precio original:</h4>
        <span className="font-bold line-through">
          $
          {price}
        </span>
      </div>
      <div className="flex justify-between">
        <h4>Descuento especial:</h4>
        <span>
          $
          {discount}
        </span>
      </div>
      <div className="flex justify-between text-xl font-black">
        <h4>Total a pagar:</h4>
        <span>
          $
          {price - discount}
        </span>
      </div>
    </div>
  );
}

const mapStateToProps = ({ shoppingCart }) => ({ shoppingCart });
export default connect(mapStateToProps, null)(Discount);
