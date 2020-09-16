import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { RealExapleUseRef } from "../../../components/04-useRef/RealExapleUseRef";

describe("Pruebas en el <RealExapleUseRef>", () => {
  const wrapper = shallow(<RealExapleUseRef />);
  test("debe hacer match el componente RealExapleUseRef ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar el componente <MultipleCustomHooks />", () => {
    const wrapper = shallow(<RealExapleUseRef />);

    wrapper.find("button").simulate("click");

    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
