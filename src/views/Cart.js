import { connect } from 'react-redux/es/exports';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import React from 'react';
import { MdDelete, MdOutlineKeyboardReturn } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';
import getPrice from '../utils/getPrice';
import newMessageWhatsapp from '../utils/newMessageWhatsapp';
import { resetCart } from '../store/actions/shoppingCart';
import ShortCard from '../components/pure/ShortCard';
import { ButtonConfirm } from '../components/containers/AlertConfirm';
import Discount from '../components/pure/Discount';

function MenuCart({ products = [], resetCart }) {
  const clearCart = () => {
    resetCart();
  };
  const buyProducts = () => {
    products.length > 0 && window.open(newMessageWhatsapp(products, getPrice(products)));
    resetCart();
  };

  return (
    <div className="relative w-full">
      <h2 className="text-center font-first text-4xl sticky top-16 py-3 w-full bg-white z-10">Carrito de Compras</h2>
      { products.length > 0 ? (
        <div className="mx-auto p-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl bg-black bg-opacity-5">
          <AnimatePresence>
            { products.map((product, key) => <ShortCard key={product.id} {...product} />) }
          </AnimatePresence>
        </div>
      ) : <p className="font-second text-lg py-4 max-w-5xl mx-auto text-center">Agrega productos al carrito para poder comprarlos</p>}

      <div className="bg-white sticky bottom-0 w-full p-2">

      <Discount />
      <div className="max-w-xl mx-auto mt-4">
        <Link to="/store">
          <button className="font-second text-base w-full ring-2 ring-[#007bff] p-2 bg-[#F0F7FF] rounded text-[#007bff] flex items-center">
            <MdOutlineKeyboardReturn />
            Seguir comprando
          </button>
        </Link>
        <div className="flex p-2 gap-2">
          <ButtonConfirm
            className=" font-second text-base flex-grow justify-center ring-2 ring-[#dc2626] text-[#dc2626] p-2 rounded bg-[#FFF8F8] flex items-center"
            confirm={clearCart}
            >
            <MdDelete />
            Limpiar Carrito
          </ButtonConfirm>
          <ButtonConfirm
            confirm={buyProducts}
            className=" font-second text-base flex-grow justify-center bg-[#16a34a] p-2 rounded text-white flex items-center"
            >
            <GiShoppingBag />
            Comprar Todo
          </ButtonConfirm>
        </div>
      </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.shoppingCart,
});

const mapDispatchToProps = (dispatch) => ({ resetCart: () => dispatch(resetCart()) });

export default connect(mapStateToProps, mapDispatchToProps)(MenuCart);
