import { useState } from "react"

const useFilter = (initialState = null) => {
  const [state, setState] = useState(initialState);

  const setFilter = (newState) => {
    setState(newState.trim().toLowerCase());
  }

  return [state, setFilter];
}

export default useFilter;
