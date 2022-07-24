import React, { useState, useContext } from "react";
import { GlobalState } from "../store/context";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const userCtx = useContext(GlobalState);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: 0,
  });

  const changeHandler = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  console.log(userData);
  const submitHandler = (e) => {
    e.preventDefault();
    userCtx.createUser(userData);
    navigate("/page");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter Name"
          value={userData.name}
          onChange={changeHandler}
        ></input>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter Email"
          value={userData.email}
          onChange={changeHandler}
        ></input>
        <input
          id="phone"
          name="phone"
          type="number"
          placeholder="Enter Phone Number"
          value={userData.phone}
          onChange={changeHandler}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
};

export default ProfileForm;
