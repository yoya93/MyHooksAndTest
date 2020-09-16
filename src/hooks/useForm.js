// este hooks recibe un objeto con los key de los input que
//quiera usted seguir en su formulario y retorna el valor actual de este
//y una funcion para que pueda ser modificado este state desde el padre
// una vez recibido el  value en el component padre debe destructurarlo

import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [value, setValue] = useState(initialState);

  const reset = () => {
    setValue(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.value,
    });
  };

  return [value, handleInputChange, reset];
};
