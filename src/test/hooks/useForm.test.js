import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";
import "@testing-library/jest-dom";

describe("Pruebas en el custom hook useForm", () => {
  const initialstate = [
    {
      name: "jorge",
      email: "jorge@SpeechGrammarList.com",
    },
  ];
  test("debe retornar un formulario por defecto ", () => {
    const { result } = renderHook(() => useForm(initialstate));

    const [value, handleInputChange, reset] = result.current;

    expect(value).toEqual(initialstate); //comparar  dos object
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("debe cambiar el valor del formulario(name) ", () => {
    const { result } = renderHook(() => useForm(initialstate));

    const [, handleInputChange] = result.current;

    const target = {
      name: "name",

      value: "yoyajr",
    };

    act(() => {
      handleInputChange({ target });
    });

    const [value] = result.current;

    expect(value).toEqual({ ...initialstate, name: "yoyajr" }); //comparar  dos object
  });

  test("debe resetear el formulario ", () => {
    const { result } = renderHook(() => useForm(initialstate));

    const [, handleInputChange, reset] = result.current;

    const target = {
      name: "name",
      value: "yoyajr",
    };

    act(() => {
      handleInputChange({ target });
      reset();
    });

    const [value] = result.current;

    expect(value).toEqual(initialstate); //comparar  dos object
  });
});
