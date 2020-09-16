import React from "react";
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { act } from "@testing-library/react";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Pruebas en <AppRouter /> ", () => {
  const user = {
    name: "jorge",
    email: "jorhe@gmail.com",
  };
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );

  test("debe de mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
