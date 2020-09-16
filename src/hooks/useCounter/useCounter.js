import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [state, setstate] = useState(initialState);

  const incrementar = (factor) => {
    setstate(state + factor);
  };
  const decrementar = (factor) => {
    setstate(state - factor);
  };

  const reset = () => setstate(initialState);
  return {
    state,
    incrementar,
    decrementar,
    reset,
  };
};
