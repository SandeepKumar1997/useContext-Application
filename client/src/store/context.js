import { createContext, useReducer } from "react";
import ReducerFn from "./Reducers";

const initialState = {
  userProfiles: [],
};

export const GlobalState = createContext(initialState);

const Global = (props) => {
  const [state, dispatch] = useReducer(ReducerFn, initialState);

  const createUser = async (userData) => {
    try {
      const fetchRequest = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const response = await fetchRequest.json();
      dispatch({ type: "ADD_USER", payload: response });
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/profile");
      const fetchdata = await response.json();
      const data = fetchdata.user;

      dispatch({ type: "GET_USER", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateUser = async (id, userData) => {
    try {
      const response = await fetch(`http://localhost:5000/api/profile/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const fetchdata = await response.json();
      const data = fetchdata.updatedUser;

      dispatch({ type: "UPDATE_USER", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <GlobalState.Provider value={{ state, getUsers, createUser, updateUser }}>
      {props.children}
    </GlobalState.Provider>
  );
};

export default Global;
