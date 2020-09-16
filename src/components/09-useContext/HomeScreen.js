import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScreen = () => {
  const { user } = useContext(UserContext);
  const { name } = user;

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <h3>{name}</h3>
    </div>
  );
};
