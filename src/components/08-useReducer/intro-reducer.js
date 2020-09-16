const initialState = [
  {
    id: 1,
    todo: "Comprar leche",
    done: false,
  },
];

const todoReducer = (state = initialState, AddTodoAction) => {
  if (AddTodoAction?.type === "agregar") {
    return [...state, AddTodoAction.pyload];
  }
  return state;
};

let todos = todoReducer();

const newTod = {
  id: 2,
  todo: "Comprar Pan",
  done: false,
};

const AddTodoAction = {
  type: "agregar",
  pyload: newTod,
};

todos = todoReducer(todos, AddTodoAction);

console.log(todos);
