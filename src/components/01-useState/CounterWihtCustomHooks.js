import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";
export const CounterWihtCustomHooks = () => {
  const { incrementar, decrementar, reset, state } = useCounter();
  return (
    <>
      <h1>Couenter {state}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          incrementar(2);
        }}
      >
        +
      </button>
      <button className="btn btn-secundary" onClick={reset}>
        reset
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          decrementar(2);
        }}
      >
        -
      </button>
    </>
  );
};
