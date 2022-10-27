import { useState } from 'react';

/**
 * Custom Hook to Handler Filter State
 *
 * @param {string} initialFilter - Filter when component is mounted
 * @returns {array} State Hooks with Filter and Handler Function Filter
 */
const useFilter = (initialState = null) => {
  const [state, setState] = useState(initialState);

  const setFilter = (newState) => {
    setState(newState.trim().toLowerCase());
  };

  return [state, setFilter];
};

export default useFilter;
