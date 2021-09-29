import React, { createContext } from "react";
export const initialState = {
  user: "",
  task: "",
};
export const UserContext = createContext(initialState);
