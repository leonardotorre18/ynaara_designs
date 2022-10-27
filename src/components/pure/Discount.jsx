import React, { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import getPrice, {getDiscount} from '../../utils/getPrice';


function Discount({products}) {

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(()=>{

    setPrice(getPrice(products));
    setDiscount(getDiscount(products))

  },[products])

  return (
    <div className=" max-w-xl mx-auto p-2 my-4 font-second text-base shadow">
      <div className="flex justify-between">
        <h4>Precio original:</h4><span className="font-bold line-through">${price}</span>
      </div>
      <div className="flex justify-between">
        <h4>Descuento especial:</h4><span>${discount}</span>
      </div>
      <div className="flex justify-between text-xl font-black">
        <h4>Total a pagar:</h4><span className="">${price-discount}</span>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.shoppingCart 
  }
}

export default connect(mapStateToProps, null)(Discount);
