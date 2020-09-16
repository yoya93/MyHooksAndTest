import React from "react";

export const ChildCallbackHook = React.memo(({ incrementar }) => {
  console.log("renders ");

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          incrementar(6);
        }}
      >
        +1
      </button>
    </>
  );
});
