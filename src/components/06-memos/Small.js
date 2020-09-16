import React from "react";

// export const Small = ({ value }) => {
//   console.log(value);

//   console.log("se vuelve a renderizar");

//   return (
//     <div>
//       <small>{value}</small>
//     </div>
//   );
// };

export const Small = React.memo(({ value }) => {
  console.log(value);

  console.log("se vuelve a renderizar");

  return (
    <div>
      <small>{value}</small>
    </div>
  );
});
