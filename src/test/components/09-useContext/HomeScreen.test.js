import React from "react";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { act } from "@testing-library/react";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Pruebas en <HomeScreen /> ", () => {
  const user = {
    name: "jorge",
    email: "jorhe@gmail.com",
  };
  //   const wrapper = shallow(//con este solamente se muestra el hoc po lo tanto no me sirve ya que necesito ver como se renderizo el mount
  //     <UserContext.Provider>
  //       <HomeScreen user={user} />
  //     </UserContext.Provider>
  //   );

  const wrapper = mount(
    //con este solamente se muestra el hoc po lo tanto no me sirve ya que necesito ver como se renderizo el mount
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  );

  test("debe de mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
