export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((todo) => todo.id !== action.payload); //filter regresa un arreglo con todos los itens que cumplan esa condicion
    case "through":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

    default:
      return state;
  }
};

// case "through":
//   return state.map((todo) => {
//     if (todo.id === action.payload) {
//       // busco el elemento del array ke se kiere cambiar
//       return { ...todo, done: !todo.done }; //retorno el objeto con la propiedad done cambiada
//     } else {
//       return todo;
//     }
//   });
