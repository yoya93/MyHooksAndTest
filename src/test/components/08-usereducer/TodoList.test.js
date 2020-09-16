import React from "react";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { todosDemo } from "../../fixtures";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

describe("pruebas en el TodoList", () => {
  const handleThrough = jest.fn();
  const handleDeleteIten = jest.fn();
  const wrapper = shallow(
    <TodoList
      i={0}
      todos={todosDemo}
      handleThrough={handleThrough}
      handleDeleteIten={handleDeleteIten}
    />
  );

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener dos TodoListIten", () => {
    expect(wrapper.find("TodoListIten").length).toBe(todosDemo.length);
    expect(wrapper.find("TodoListIten").at(0).prop("handleDeleteIten")).toEqual(
      expect.any(Function) // verifico que los componentes tienen la funcion en sus props de jest
      // toEqual ya que tienen dirreccion de memorias diferentes
    );
  });
});
