import React, { useState, useRef} from 'react';
import OwlCarousel from 'react-owl-carousel3';
import { motion } from 'framer-motion';
import { connect } from 'react-redux/es/exports';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-hot-toast'
import { MdExpandLess,MdExpandMore } from 'react-icons/md';
import { addToCart } from '../../store/actions/shoppingCart';
import { clearBuy } from '../../store/actions/currentBuy';

const MenuBuy = ({id, name, img = [], price, sizes = ['Talla Única'], clearBuy, addProduct}) => {
  const [count, setCount] = useState(1);
  const size = useRef(null);

  const addCount = () => {
    setCount(count+1);
  }
  const sustractCount = () => {
    count > 1 && setCount(count-1)
  }

  return (
    <motion.div 
      className="fixed bg-white shadow-xl p-4 z-10 top-16 left-0 w-full h-full overflow-y-scroll"
      initial={{scale: 0}}
      animate={{scale: 1}}
      exit={{scale: 0}}
    >
      <div className="max-w-5xl mx-auto">
      <button onClick={clearBuy} className="text-3xl flex justify-end w-full"><AiFillCloseCircle /></button>
      <h2 className="text-center font-first text-4xl">Compra</h2>
      <div className="p-4">
      <OwlCarousel
        items={2}
      >
        {img.map((item, key)=><img src={item} key={key} alt="Imagen del producto" />)}
      </OwlCarousel>
      </div>
      <div className="flex justify-between py-1 px-3 max-w-lg mx-auto">
        <h3 className="font-second text-xl">{name}</h3>
        <span className="font-bold ml-1 text-base">{price}$</span>
      </div>
      <div className="flex flex-col gap-4 p-4 max-w-lg mx-auto">
        <div className="flex w-full ring-2 ring-first overflow-hidden rounded">
          <label htmlFor="size" className="bg-first w-40 min-w-max text-white font-second p-1 text-base">Talla</label>
          <select name="size" className="w-full outline-none font-second text-base" id="size" ref={size}>
            {sizes.map((item,key) => <option key={key}>{item}</option>)}
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
          <button className="bg-[#dc2626] py-1 px-5 rounded text-white text-base" onClick={clearBuy}>Cancelar</button>
          <button 
            className=" flex-grow bg-[#16a34a] py-1 px-5 text-base rounded text-white"
            onClick={()=>{
            addProduct({id, name, img, count, size: size.current.value, price});
            clearBuy();
            toast.success(`Agregado ${name} al carrito`, {
              position: "top-right",
              duration: 3000
            })
          }}>Agregar</button>
        </div>
      </div>
    </motion.div>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => dispatch(addToCart(product)),
    clearBuy: () => dispatch(clearBuy())
  };
}

export default connect(null, mapDispatchToProps)(MenuBuy);
