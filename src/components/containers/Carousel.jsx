// import "../../styles/Carousel.scss";

import React from 'react';
import OwlCarousel from 'react-owl-carousel3';


export default function Carousel({products}) {
  return (
    <OwlCarousel 
      className="owl-theme"
      margin={10}
      loop
      items={1}
      autoplayTimeout={4000}
      autoplayHoverPause={true}
      lazyLoad={true}
      autoplaySpeed={500}
      responsive={{
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        }
      }}
    >
          { products.map((product, key) => {
            return <div key={key}>
              <img src={product.img} alt="Ropa a la venta" />
            </div>
          }) }
    </OwlCarousel>
  )
}