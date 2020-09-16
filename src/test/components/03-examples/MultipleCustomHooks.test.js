import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";

jest.mock("../../../hooks/useCounter");

jest.mock("../../../hooks/useFetch"); // no me importa la implementacion del hooks porke ya esta probado
//lo ke me interesa es utilizar lo ke me retorna este hooks por esa razon la paso por el mock
// de esta forma el useFetch que desconectado de lo ke el realiza normalmente y queda dispuesto a que yo maneje los datos ke devuelve

describe("Pruebas en el <MultipleCustomHooks>", () => {
  useCounter.mockReturnValue({
    state: 1,
    incrementar: (n) => {},
  });

  test("debe hacer match el componente MultipleCustomHooks ", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test(" should debe mostrar la informacion  ", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "fernando",
          quote: "hola mundo",
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("hola mundo");
    expect(wrapper.find("footer").text().trim()).toBe("fernando");
  });
});
