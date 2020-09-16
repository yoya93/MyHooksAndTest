import React from "react";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { act } from "@testing-library/react";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Pruebas en <LoginScreen /> ", () => {
  const setUser = jest.fn();
  const user = {
    name: "jorge",
    email: "jorhe@gmail.com",
  };

  const wrapper = mount(
    //con este solamente se muestra el hoc po lo tanto no me sirve ya que necesito ver como se renderizo el mount
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen user={user} />
    </UserContext.Provider>
  );

  test("debe de mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de ejecutar el setuser con el argumento esperado ", () => {
    wrapper.find("button").simulate("click");

    expect(setUser).toHaveBeenCalledWith({
      name: "jorge",
    });
  });
});
