import React, { useState } from 'react';
import { AnimatePresence,motion } from 'framer-motion';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import getPrice, {getDiscount} from '../../utils/getPrice';
import {FaShoppingBag} from 'react-icons/fa'


function PriceAbsolute({products}) {
  const [price, setPrice] = useState(0);
  
  const history = useNavigate();
  const location = useLocation();

  useEffect(()=>{

    setPrice(getPrice(products) - getDiscount(products));

  },[products])

  return (
    <AnimatePresence>
      {location.pathname !== '/cart' && (
        <motion.div
          initial={{translateX: 100, scale: 0}}
          animate={{translateX: 0, scale: 1}} 
          whileHover={{scale:1.2, translateX: -15, translateY: -15}}
          exit={{translateX: 100, scale: 0}}
          className="fixed z-20 bg-white bottom-3 right-3 rounded-full px-4 ring-2 ring-first hover:ring-4 hover:ring-opacity-80 transition-all"
          onClick={()=>price === 0 ? history('/store') : history('/cart')}
        >
          <p className="text-center font-second text-lg">
            {price === 0 ? 'Ir a comprar' : 'Ir a pagar'}
          </p>
          <div className="text-lg font-second flex gap-2">
            <span>USD {price}</span><FaShoppingBag />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.shoppingCart
  }
}

export default connect(mapStateToProps, null)(PriceAbsolute);
