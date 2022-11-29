/* eslint-disable import/no-unresolved */
import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

import 'swiper/css';
import 'swiper/css/autoplay';

export default function ProductCard({
  id,
  name,
  price,
  img,
}) {
  const history = useNavigate();
  return (
    <motion.div
      className="group relative cursor-pointer shadow rounded-md overflow-hidden"
      onClick={() => history(`/${id}`)}
      whileTap={{ scale: 0.9 }}
    >
      <div className="overflow-hidden max-h-72">
        <Swiper
          modules={[Autoplay]}
          loop
          slidesPerView={1}
          autoplay={{
            delay: Math.round(Math.random() * (8 - 3) + 3) * 1000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          speed={1000}
        >
          { img.map((url) => (
            <SwiperSlide>
              <img
                key={url.id}
                src={url.url}
                alt="Imagen del Producto"
                className="w-full object-cover hover:opacity-80 hover:scale-105 transition-all duration-500"
              />
            </SwiperSlide>
          )) }
        </Swiper>
      </div>
      <div className="flex justify-between py-1 px-3">
        <h3 className="font-second text-lg">
          {name}
        </h3>
        <span className="font-bold ml-1 font-second text-base">
          {price}
          $
        </span>
      </div>
    </motion.div>
  );
}
