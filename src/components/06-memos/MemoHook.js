import React, { useState, useMemo } from "react";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/simpleForm.css";
import { procesoPesado } from "../../helpers/procesoPesado";

export const MemoHook = () => {
  const [show, setShow] = useState(false);
  const { state, incrementar } = useCounter(100);

  const memoProcesoPesado = useMemo(() => procesoPesado(state), [state]);

  return (
    <>
      <h1>Memo Hook</h1>
      <hr />
      <h3>{state}</h3>

      <p>{memoProcesoPesado}</p>

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
        className="btn btn-primary ml-5"
      >
        Show
      </button>
    </>
  );
};
