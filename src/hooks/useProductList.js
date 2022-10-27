import { useState, useRef } from 'react';

/**
 * Custom Hooks given one Product List and Filter, but not lose products
 *
 * @param {array} products - Product List when component is mounted
 * @returns {array} State with Product List and Fucntion Handler to get Dinamic Product List when pass a filter
 */
const useProductList = (products = []) => {
  const state = useRef(products);
  const [tempList, setTempList] = useState(state.current);

  const filterList = (filter) => {
    if (filter.length > 0) {
      setTempList(
        state.current.filter(
          (product) => product.name.trim().toLowerCase().includes(filter),
        ),
      );
    } else setTempList(state.current);
  };

  return [tempList, filterList];
};

export default useProductList;
