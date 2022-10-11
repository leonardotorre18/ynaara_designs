import React from 'react';
import OwlCarousel from 'react-owl-carousel3';

export default function Carousel({products}) {
  return (
    <OwlCarousel
      loop
      className="owl-theme"
      autoplay
      margin={10}
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
              <img src={product} alt="Ropa a la venta" />
            </div>
          }) }
    </OwlCarousel>
  )
}
