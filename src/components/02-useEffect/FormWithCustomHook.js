import React from "react";
import "./simpleForm.css";
import { useForm } from "../../hooks/useForm";

export const FormWithCustomHook = () => {
  const { value, handleInputChange } = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = value;

  const handleOnSubmitForm = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form onSubmit={handleOnSubmitForm}>
      <h1>FormWithCustomHook</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          placeholder="Ingrese su name"
          autoComplete="off"
          className="form-control"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="example@gmail.com"
          autoComplete="off"
          className="form-control"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="****"
          className="form-control"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};
