import React, { useState, useEffect } from "react";
import "./simpleForm.css";
import { Menssage } from "./Menssage";

export const SimpleForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const { name, email } = form;

  useEffect(() => {}, []);

  useEffect(() => {}, [form]);

  const handleInputChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
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

        {name === "123" && <Menssage />}
      </div>
    </>
  );
};
