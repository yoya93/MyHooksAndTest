import React, { useRef, useLayoutEffect } from "react";
import "../02-useEffect/simpleForm.css";

import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

export const LayoutEffect = () => {
  const tagP = useRef();

  const initial = 1;
  const { state, incrementar } = useCounter(initial);

  const endpoint = `https://www.breakingbadapi.com/api/quotes/${state}`;

  const { data } = useFetch(endpoint);
  const { quote } = !!data && data[0];

  useLayoutEffect(() => {
    console.log(tagP.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      <blockquote className="blockqoute text-right">
        <p ref={tagP} className="ab-0">
          {" "}
          {quote}
        </p>
      </blockquote>

      <button onClick={() => incrementar(initial)} className="btn btn-primary">
        Next
      </button>
    </>
  );
};
