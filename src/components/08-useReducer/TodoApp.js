import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";

import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

import "./styles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
  //[
  //     {
  //       id: new Date().getTime(),
  //       desc: "Aprender React",
  //       done: false,
  //     },
  //   ];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const handleDeleteIten = (id) => {
    const action = {
      type: "delete",
      payload: id,
    };

    dispatch(action);
  };

  const handleThrough = (id) => {
    dispatch({
      type: "through",
      payload: id,
    });
  };

  const handleAdd = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1>TodoApp({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            handleDeleteIten={handleDeleteIten}
            handleThrough={handleThrough}
            todos={todos}
          />
        </div>

        <div className="col-5">
          <TodoAdd handleAdd={handleAdd} />
        </div>
      </div>
    </>
  );
};
