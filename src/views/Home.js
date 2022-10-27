import React, {useState} from 'react';
import Jumbotron from '../components/layout/Jumbotron';
import Offert from '../components/layout/Offert';
import OwlCarousel from 'react-owl-carousel3'
import { useNavigate } from 'react-router';

export default function Home() {
  const history = useNavigate();
  // const getListing = (length) => {
  //   const data = listing.sort(function() {return Math.random() - 0.5});
  //   if (length) return data.splice(0,length);
  //   else return data;
  // }
  
  const [products, setProducts] = useState([
    'assets/img/img3.1.jpg',
    'assets/img/img4.jpg',
    'assets/img/img6.1.jpg',
    'assets/img/img1.jpg',
    'assets/img/img11.1.jpg',
    'assets/img/img16.jpg',
    'assets/img/img17.jpg',
  ]);

  return (
    <div>
      <Jumbotron />
      <Offert />
      <div
        className="mx-auto p-3 bg-first"
      >
        <h2 className="text-3xl text-white font-first text-center py-2">Nuestros productos</h2>
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
        { products.map((product, key) => (
          <div key={key}
            onClick={()=>history('/store')}
          >
            <img src={product} /> 
          </div>
        )) }
      </OwlCarousel>
      </div>
    </div>
  );
}
