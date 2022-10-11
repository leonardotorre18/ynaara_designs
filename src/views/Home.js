import React, { useState } from 'react';
import Carousel from '../components/containers/Carousel';
import Jumbotron from '../components/layout/Jumbotron';
import Section from '../components/containers/Section';


export default function Home() {
  
  
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
  ]);


  return (
    <div>
      <Jumbotron />
      <Section>
        <h2 className="title">Nuestros productos</h2>
        <Carousel products={products} />
      </Section>
    </div>
  )
}
