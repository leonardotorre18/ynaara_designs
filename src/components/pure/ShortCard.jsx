import React from 'react';
import { connect } from 'react-redux/es/exports';
import { motion } from 'framer-motion';
import { MdDelete } from 'react-icons/md';
import { deleteToCart } from '../../store/actions/shoppingCart';

function ShortCard({
  id,
  name,
  size,
  count,
  img,
  deleteProduct,
}) {
  return (
    <motion.div
      className="bg-white py-2 px-6 shadow rounded divide-opacity-10 divide-y divide-black"
      animate={{ translateX: 0 }}
      exit={{ translateX: 100 }}
    >
      <div className=" flex justify-between">
        <div className="p-1">
          <p className="font-second font-extrabold text-xl">{name}</p>
          <p className="pl-4 font-second text-lg italic opacity-80">
            Talla:
            {size}
          </p>
          <p className="pl-4 font-second text-lg italic opacity-80">
            Cantidad:
            {count}
          </p>
        </div>
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img
            className="w-full object-cover"
            src={img[0].url}
            alt="Producto"
          />
        </div>
      </div>
      <div className="p-2 flex justify-start">
        <button
          type="button"
          onClick={() => {
            deleteProduct(id, size);
          }}
          className="flex items-center bg-[#dc2626] text-white text-base p-1 rounded"
        >
          <MdDelete />
          Eliminar
        </button>
      </div>
    </motion.div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteProduct: (id, size) => dispatch(deleteToCart(id, size)),
});

export default connect(null, mapDispatchToProps)(ShortCard);
