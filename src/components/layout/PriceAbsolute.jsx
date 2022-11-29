import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { connect } from 'react-redux';
import { FaShoppingBag } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router';
import getPrice, { getDiscount } from '../../utils/getPrice';

function PriceAbsolute({ shoppingCart }) {
  const [price, setPrice] = useState(0);

  const history = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setPrice(getPrice(shoppingCart) - getDiscount(shoppingCart));
  }, [shoppingCart]);

  return (
    <AnimatePresence>
      {location.pathname !== '/cart' && (
        <motion.div
          initial={{ translateX: 100, scale: 0 }}
          animate={{ translateX: 0, scale: 1 }}
          whileHover={{ scale: 1.2, translateX: -15, translateY: -15 }}
          exit={{ translateX: 100, scale: 0 }}
          className="fixed z-20 bg-white bottom-3 right-3 rounded-full px-4 ring-2 ring-first hover:ring-4 hover:ring-opacity-80 transition-all"
          onClick={() => history(price === 0 ? '/store' : '/cart')}
        >
          <p className="text-center font-second text-lg">
            {price === 0 ? 'Ir a comprar' : 'Ir a pagar'}
          </p>
          <div className="text-lg font-second flex gap-2">
            <span>
              USD
              {price}
            </span>
            <FaShoppingBag />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const mapStateToProps = ({ shoppingCart }) => ({ shoppingCart });

export default connect(mapStateToProps, null)(PriceAbsolute);
