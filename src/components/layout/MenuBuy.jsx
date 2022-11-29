/* eslint-disable import/no-unresolved */
import React, { useState, useRef } from 'react';
import { connect } from 'react-redux/es/exports';
import { Autoplay } from 'swiper';
import { useNavigate } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { toast } from 'react-hot-toast';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { addToCart } from '../../store/actions/shoppingCart';

import 'swiper/css';
import 'swiper/css/autoplay';

function MenuBuy({
  id,
  name,
  price,
  addProduct,
  img = [],
  sizes = ['Talla Única'],
}) {
  const [count, setCount] = useState(1);
  const sizeRef = useRef(null);

  const addCount = () => setCount(count + 1);
  const sustractCount = () => count > 1 && setCount(count - 1);

  const history = useNavigate();

  return (
    <div className="fixed bg-white shadow-xl p-4 z-10 top-16 left-0 w-full h-full overflow-y-scroll">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center font-first text-4xl">Compra</h2>
        <div className="p-4">
          <Swiper
            modules={[Autoplay]}
            loop
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
          >
            { img.map((src) => (
              <SwiperSlide key={src.id}>
                <img src={src.url} alt="Imagen del producto" />
              </SwiperSlide>
            )) }
          </Swiper>
        </div>
        <div className="flex justify-between py-1 px-3 max-w-lg mx-auto">
          <h3 className="font-second text-xl">
            {name}
          </h3>
          <span className="font-bold ml-1 text-base">
            {price}
            $
          </span>
        </div>
        <div className="flex flex-col gap-4 p-4 max-w-lg mx-auto">
          <div className="flex w-full ring-2 ring-first overflow-hidden rounded">
            <label htmlFor="size" className="bg-first w-40 min-w-max text-white font-second p-1 text-base">Talla</label>
            <select
              name="size"
              className="w-full outline-none font-second text-base"
              id="size"
              ref={sizeRef}
            >
              { sizes.map((size, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <option key={key}>{size}</option>
              ))}
            </select>
          </div>
          <div className="flex w-full ring-2 ring-first overflow-hidden rounded">
            <label htmlFor="count" className="bg-first w-40 min-w-max text-white font-second p-1 text-base">Cantidad</label>
            <div className="flex w-full justify-around items-center">
              <MdExpandMore className="text-xl" onClick={sustractCount} />
              <div type="number" className="w-max outline-none font-second text-base" name="count" id="count">{count}</div>
              <MdExpandLess className="text-xl" onClick={addCount} />
            </div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-4 flex mb-20">
          <button
            type="button"
            className="bg-[#dc2626] py-1 px-5 rounded text-white text-base"
            onClick={() => history('/')}
          >
            Cancelar
          </button>
          <button
            type="button"
            className=" flex-grow bg-[#16a34a] py-1 px-5 text-base rounded text-white"
            onClick={() => {
              addProduct({
                id,
                name,
                img,
                count,
                size: sizeRef.current.value,
                price,
              });
              toast.success(`Agregado ${name} al carrito`, {
                position: 'top-right',
                duration: 3000,
              });
              history('/');
            }}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addToCart(product)),
});

export default connect(null, mapDispatchToProps)(MenuBuy);
