import React from "react";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";
import { todosDemo } from "../../fixtures";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

describe("Pruebas en <TodoAdd /> ", () => {
  const handleAdd = jest.fn(); // monitorizacion de mi funcion en el componente
  const wrapper = shallow(<TodoAdd handleAdd={handleAdd} />);

  test("debe de mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test(" No debe de llamar a  handleAdd ", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({ preventDefault() {} });

    expect(handleAdd).toHaveBeenCalledTimes(0);
  });

  test("Debe de llamar a funcion handleAdd ", () => {
    const value = "Test 1";
    wrapper.find("input").simulate("change", {
      target: {
        value,
        name: "description",
      },
    });

    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({ preventDefault() {} });

    expect(handleAdd).toHaveBeenCalledTimes(1);
    expect(handleAdd).toHaveBeenCalledWith({
      id: expect.any(Number), // el id canbia por lo cual soo vverifico los otros valores y ke este id sea un number
      desc: value,
      done: false,
    });

    expect(wrapper.find("input").prop("value")).toBe(""); //espero que se halla disparado la function reset
  });
});
