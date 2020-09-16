import React, { useState, useCallback } from "react";

import "../02-useEffect/simpleForm.css";
import { ChildCallbackHook } from "./ChildCallbackHook";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementar = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <>
      <h1>CallbackHook : {counter}</h1>
      <hr />

      <ChildCallbackHook incrementar={incrementar} />
    </>
  );
};
