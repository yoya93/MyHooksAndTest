import React, { useRef } from "react";
import "../02-useEffect/simpleForm.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input ref={inputRef} className="form-control" placeholder="Su nombre" />

      <button className="btn btn-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </>
  );
};
