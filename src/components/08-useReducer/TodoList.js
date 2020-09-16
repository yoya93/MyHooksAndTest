import React from "react";
import { TodoListIten } from "./TodoListIten";

export const TodoList = ({ todos, handleThrough, handleDeleteIten }) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {todos.map((todo, i) => (
          <TodoListIten
            key={todo.id}
            todo={todo}
            i={i}
            handleDeleteIten={handleDeleteIten}
            handleThrough={handleThrough}
          />
        ))}
      </ul>
    </>
  );
};
