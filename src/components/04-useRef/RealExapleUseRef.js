import React, { useState } from "react";
import "../02-useEffect/simpleForm.css";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

export const RealExapleUseRef = () => {
  const [showComponet, setShowComponet] = useState(false);

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      {showComponet && <MultipleCustomHooks />}

      <button
        className="btn btn-primary mt-5 inline-block"
        onClick={() => {
          setShowComponet(!showComponet);
        }}
      >
        Show
      </button>
    </>
  );
};
