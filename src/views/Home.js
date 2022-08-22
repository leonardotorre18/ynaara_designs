import React, { useEffect, useState } from 'react';
import Carousel from '../components/containers/Carousel';
import Jumbotron from '../components/layout/Jumbotron';
import ProductsJSON from '../api/products.json';
import Section from '../components/containers/Section';

export default function Home() {

  const [products, setProducts] = useState([]);
  useEffect(()=>{
    setProducts(ProductsJSON)
  },[])

  return (
    <div>
      <Jumbotron />
      <Section>
        <h2 className="title">¿Buscas atención personalizada?</h2>
        <img 
          src="https://previews.123rf.com/images/georgerudy/georgerudy1605/georgerudy160500525/57412952-hermosa-dise%C3%B1adora-est%C3%A1-trabajando-en-estudio-de-confecci%C3%B3n-mirando-a-c%C3%A1mara-y-sonriendo-en-el-fondo.jpg" 
          alt="Imagen de prueba"
          style={{
            'width': '100%',
            'height': '400px',
            'objectFit': 'cover'

          }}
        />
      </Section>
      <Section>
        <h2 className="title">Conjuntos</h2>
        <Carousel>
          { products.map((product, key) => {
            return <div key={key}>
              <img src={product.img} alt="PArmas" />
            </div>
          }) }
        </Carousel>
      </Section>
    </div>
  )
}
