import React from "react";

export const TodoListIten = ({ i, todo, handleThrough, handleDeleteIten }) => {
  return (
    <>
      <li key={todo.id} className="list-group-iten mb-2">
        <p
          onClick={() => {
            handleThrough(todo.id);
          }}
          className={`${todo.done && "complete"}`}
        >
          {i + 1}-{todo.desc}
        </p>
        <button
          onClick={() => {
            handleDeleteIten(todo.id);
          }}
          className="btn btn-danger"
        >
          Borrar
        </button>
      </li>
    </>
  );
};
