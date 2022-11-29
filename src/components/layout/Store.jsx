import React, { useEffect } from 'react';
import { MdOutlineKeyboardReturn } from 'react-icons/md';
import ProductCard from '../pure/ProductCard';
import SearchBar from '../pure/SearchBar';
import productsImport from '../../data/products';
import useFilter from '../../hooks/useFilter';
import useProductList from '../../hooks/useProductList';

export default function Store() {
  const [filter, setFilter] = useFilter('');
  const [products, setProducts] = useProductList(productsImport);

  useEffect(() => {
    setProducts(filter);
  }, [filter]);

  return (
    <div className="px-7 py-3 relative">
      <SearchBar setFilter={setFilter} />

      { products.length > 0 ? (
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
          { products.map(({
            id,
            name,
            price,
            img,
          }) => (
            <ProductCard
              id={id}
              key={id}
              name={name}
              price={price}
              img={img}
            />
          )) }
        </div>
      ) : (
        <div className="max-w-5xl mx-auto">
          <p className="font-second text-xl py-4 text-center">
            {`No hay coincidencias para "
            ${filter}
            "`}
          </p>
          <button
            type="button"
            onClick={() => setFilter('')}
            className="bg-[#007bff] py-2 px-5 rounded text-white text-lg flex items-center"
          >
            <MdOutlineKeyboardReturn />
            Ver todos los resultados
          </button>
        </div>
      ) }
    </div>
  );
}
