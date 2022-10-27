import React from 'react';
import { connect } from 'react-redux/es/exports';
import { setBuy } from '../../store/actions/currentBuy';
import OwlCarousel from 'react-owl-carousel3';
import { motion } from "framer-motion";

const ProductCard = ({ id, name, price, img, sizes, setBuy }) => {
  return (
    <motion.div className="group relative cursor-pointer shadow rounded-md overflow-hidden"
      onClick={()=>{
        setBuy({
          id, 
          name,
          price: parseInt(price),
          img,
          sizes
        });
      }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="overflow-hidden max-h-72">
        <OwlCarousel
          items={1}
          // className='carousel-theme'
          autoplay
          autoplayTimeout={Math.round(Math.random() * (8 - 3) + 3) * 1000}
          autoplaySpeed={1000}
          loop
        >
          { img.map((url, key) => (
            <img
              key={key}
              src={url}
              alt="Imagen del Producto"
              className="w-full object-cover hover:opacity-80 hover:scale-105 transition-all duration-500"
            />
          )) }
        </OwlCarousel>
      </div>
      <div className="flex justify-between py-1 px-3">
        <h3 className="font-second text-lg">{name}</h3>
        <span className="font-bold ml-1 font-second text-base">{price}$</span>
      </div>
    </motion.div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBuy: (product) => dispatch(setBuy(product)),
  };
};

export default connect(null,mapDispatchToProps)(ProductCard);
