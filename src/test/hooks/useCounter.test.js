import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Pruebas en useCounter", () => {
  test("debe retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.state).toBe(10);
    expect(typeof result.current.incrementar).toBe("function");
    expect(typeof result.current.decrementar).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("debe tener el state en 100", () => {
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.state).toBe(100);
  });

  test("debe de incrementar ", () => {
    const { result } = renderHook(() => useCounter(100));
    const { incrementar } = result.current;

    act(() => {
      incrementar(1);
    });

    const { state } = result.current;

    expect(state).toBe(101);
  });
  test("debe de decrementar ", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrementar } = result.current;

    act(() => {
      decrementar(1);
    });

    const { state } = result.current;

    expect(state).toBe(99);
  });

  test("debe de resetear el valor ", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrementar, reset } = result.current;

    act(() => {
      decrementar(1);
      reset();
    });

    const { state } = result.current;

    expect(state).toBe(100);
  });
});
