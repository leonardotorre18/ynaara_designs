import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { connect } from 'react-redux';
import { MdOutlineKeyboardReturn } from 'react-icons/md';
import MenuBuy from '../components/layout/MenuBuy';
import ProductCard from '../components/pure/ProductCard';
import SearchBar from '../components/pure/SearchBar';
import { products as productsImport } from '../data/products';
import useFilter from '../hooks/useFilter';
import useProductList from '../hooks/useProductList';



function Store({ currentBuy, clearBuy }) {
  const [filter, setFilter] = useFilter('');
  const [products, setProducts] = useProductList(productsImport);

  useEffect(() => {
    setProducts(filter);
  }, [filter]);

  return (
    <div className="px-7 py-3 relative">
      <AnimatePresence>
        { currentBuy.name && <MenuBuy {...currentBuy} clearBuy={clearBuy} /> }
      </AnimatePresence>
      <h2 className="text-center font-first text-4xl">Tienda</h2>
      <SearchBar setFilter={setFilter} />

      { products.length > 0 ? (
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
          { products.map((product, key) => <ProductCard key={key} {...product} />) }
        </div>
      ) : (
        <div className="max-w-5xl mx-auto">
          <p className="font-second text-xl py-4 text-center">
            No hay coincidencias para "
            {filter}
            "
          </p>
          <button onClick={() => setFilter('')} className="bg-[#007bff] py-2 px-5 rounded text-white text-lg flex items-center">
            <MdOutlineKeyboardReturn />
            Ver todos los resultados
          </button>
        </div>
      ) }
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentBuy: state.currentBuy,
});

export default connect(mapStateToProps)(Store);

