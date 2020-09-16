import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { todosDemo } from "../../fixtures";
import "@testing-library/jest-dom";

describe("pruebas en el todoReducer", () => {
  test("debe retornar el state", () => {
    const state = todoReducer(todosDemo, {});

    expect(state).toEqual(todosDemo);
  });

  test("debe agregar  la todo ", () => {
    const actionadd = {
      type: "add",
      payload: {
        id: 3,
        desc: "description3",
        done: false,
      },
    };
    const state = todoReducer(todosDemo, actionadd);

    expect(state.length).toBe(3);
    expect(state[2]).toEqual(actionadd.payload);
    expect(state).toEqual([...todosDemo, actionadd.payload]);
  });
  test("debe eliminar  la todo ", () => {
    const actiondelete = {
      type: "delete",
      payload: 2,
    };
    const state = todoReducer(todosDemo, actiondelete);

    expect(state.length).toBe(1);
    expect(state).toEqual([todosDemo[0]]);
  });

  test("debe through  la todo ", () => {
    const actionthrough = {
      type: "through",
      payload: 2,
    };
    const state = todoReducer(todosDemo, actionthrough);

    expect(state[1].done).toBe(true);
    expect(state[0]).toBe(todosDemo[0]);

    // expect(state[2]).toEqual(actionadd.payload);
    // expect(state).toEqual([...todosDemo, actionadd.payload]);
  });
});
