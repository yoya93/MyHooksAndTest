import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("Pruebas en el <HookApp>", () => {
  test("debe hacer match el componente HookApp ", () => {
    const wrapper = shallow(<HookApp />);

    expect(wrapper).toMatchSnapshot();
  });
});
