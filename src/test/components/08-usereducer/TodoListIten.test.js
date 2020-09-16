import React from "react";
import { TodoListIten } from "../../../components/08-useReducer/TodoListIten";
import { todosDemo } from "../../fixtures";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

describe("pruebas en el TodoListIten", () => {
  const handleThrough = jest.fn();
  const handleDeleteIten = jest.fn();
  test("debe mostrarse correctamente", () => {
    const wrapper = shallow(
      <TodoListIten
        i={0}
        todo={todosDemo[0]}
        handleThrough={handleThrough}
        handleDeleteIten={handleDeleteIten}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("debe llamar loa funcion handleThrough ", () => {
    const wrapper = shallow(
      <TodoListIten
        i={0}
        todo={todosDemo[0]}
        handleThrough={handleThrough}
        handleDeleteIten={handleDeleteIten}
      />
    );

    wrapper.find("p").simulate("click");

    expect(handleThrough).toHaveBeenCalledWith(todosDemo[0].id);
  });

  test("debe llamar la funcion handleDeleteIten ", () => {
    const wrapper = shallow(
      <TodoListIten
        i={0}
        todo={todosDemo[0]}
        handleThrough={handleThrough}
        handleDeleteIten={handleDeleteIten}
      />
    );

    wrapper.find("button").simulate("click");

    expect(handleDeleteIten).toHaveBeenCalledWith(todosDemo[0].id);
  });

  test("debe de mostrar el texto correctamente ", () => {
    const wrapper = shallow(
      <TodoListIten
        i={0}
        todo={todosDemo[0]}
        handleThrough={handleThrough}
        handleDeleteIten={handleDeleteIten}
      />
    );

    expect(wrapper.find("p").text().trim()).toBe(
      `${0 + 1}-${todosDemo[0].desc}`
    );
  });

  test("debe de mostrar el texto correctamente ", () => {
    const t = {
      id: 3,
      desc: "description3",
      done: true,
    };
    const wrapper = shallow(
      <TodoListIten
        i={0}
        todo={t}
        handleThrough={handleThrough}
        handleDeleteIten={handleDeleteIten}
      />
    );

    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
