import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAdd }) => {
  const [value, handleInputChange, reset] = useForm({
    description: "",
  });

  const { description } = value;

  const handleSubmitAdd = (e) => {
    e.preventDefault();

    if (description.trim().length < 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAdd(newTodo);

    reset();
  };

  return (
    <>
      <h3>Agregar Todo</h3>
      <hr />

      <form onSubmit={handleSubmitAdd}>
        <input
          className="form-control"
          value={description}
          name="description"
          type="text"
          placeholder="Aprender ....."
          autoComplete="off"
          onChange={handleInputChange}
        ></input>

        <button
          type="submit"
          className="btn btn-outline-primary btn-block mt-1"
        >
          Agregar
        </button>
      </form>
    </>
  );
};
