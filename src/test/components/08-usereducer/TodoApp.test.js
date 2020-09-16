import React from "react";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { todosDemo } from "../../fixtures";
import "@testing-library/jest-dom";
import { shallow, mount } from "enzyme";
import { act } from "@testing-library/react";

describe("Pruebas en <TodoApp /> ", () => {
  const handleAdd = jest.fn(); // monitorizacion de mi funcion en el componente
  Storage.prototype.setItem = jest.fn(); //monitorizacion de las copias en el local storage
  const wrapper = shallow(<TodoApp />);

  test("debe de mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe agregar un todo", () => {
    const wrapper = mount(<TodoApp />); // con este se trabaja a un nivel mas alto en el arbol de componentes
    //generalmente este se usa para componentes padres que tienen muchos hijos y que estan en el primer nivel en apalicasion

    act(() => {
      // para realizar llamadas a funciones dentro del componente usando mount es necesario envolver todas
      // en un act que viene de "@testing-library/react";   diferrente al ke se usa con los hooks y el wrapper
      wrapper.find("TodoAdd").prop("handleAdd")(todosDemo[0]);
      wrapper.find("TodoAdd").prop("handleAdd")(todosDemo[1]);
    });

    expect(wrapper.find("h1").text().trim()).toBe(`TodoApp(2)`);
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test("debe eliminar un todo", () => {
    const wrapper = mount(<TodoApp />); // con este se trabaja a un nivel mas alto en el arbol de componentes

    act(() => {
      wrapper.find("TodoAdd").prop("handleAdd")(todosDemo[0]);
    });
    expect(wrapper.find("h1").text().trim()).toBe(`TodoApp(1)`);

    act(() => {
      wrapper.find("TodoList").prop("handleDeleteIten")(todosDemo[0].id);
    });

    expect(wrapper.find("h1").text().trim()).toBe(`TodoApp(0)`);
  });
});
