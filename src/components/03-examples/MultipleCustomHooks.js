import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

import "../02-useEffect/simpleForm.css";
export const MultipleCustomHooks = () => {
  const initial = 1;
  const { state, incrementar, decrementar } = useCounter(initial);

  const endpoint = `https://www.breakingbadapi.com/api/quotes/${state}`;

  const { loading, data } = useFetch(endpoint);
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading</div>
      ) : (
        <blockquote className="blockqoute text-right">
          <p className="mb-0"> {quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button
        disabled={state === 1 ? true : false}
        onClick={() => decrementar(initial)}
        className="btn btn-primary"
      >
        Anterior
      </button>
      <button onClick={() => incrementar(initial)} className="btn btn-primary ">
        Next
      </button>
    </>
  );
};
