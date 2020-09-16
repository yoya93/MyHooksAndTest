import React, { useState } from "react";
import { Small } from "./Small";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/simpleForm.css";

export const Memoriza = () => {
  const [show, setShow] = useState(false);

  const { state, incrementar } = useCounter(10);

  return (
    <>
      <h1>Memoriza</h1>
      <hr />
      <Small value={state} />

      <button
        onClick={() => {
          incrementar(1);
        }}
        className="btn btn-primary "
      >
        Next
      </button>

      <button
        onClick={() => {
          setShow(!show);
        }}
        className="btn btn-primary "
      >
        Show
      </button>
    </>
  );
};
