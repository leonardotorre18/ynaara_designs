import {  useState, useRef } from "react";

const useProductList = (products) => {

  const state = useRef(products);
  const [tempList, setTempList] = useState(state);


  const filterList = (filter) => {
    if (filter.length > 0 ) {
      setTempList(
        state.current.filter(
          product => product.name.trim().toLowerCase().includes(filter)
        )
      );
    } else setTempList(state.current)
  }

  return [tempList, filterList];
}

export default useProductList;
