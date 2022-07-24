import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalState } from "../store/context";
import { useParams, useNavigate } from "react-router-dom";

const EditForm = () => {
  const currentUser = useContext(GlobalState);
  const { id } = useParams();
  const navigate = useNavigate();
  const getCurrentUser = currentUser.state.userProfiles.find(
    (item) => item._id === id
  );
  const [updatedDetails, setUpdatedDetails] = useState({
    name: getCurrentUser.name,
    email: getCurrentUser.email,
    phone: getCurrentUser.phone,
  });
  console.log(getCurrentUser);

  const changeHandler = (e) => {
    setUpdatedDetails((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  console.log(updatedDetails)
  const submitHandler = (e) => {
    e.preventDefault();
    currentUser.updateUser(id,updatedDetails);
    navigate("/page");
  };
  useEffect(() => {
    currentUser.getUsers();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter Name"
          value={updatedDetails.name}
          onChange={changeHandler}
        ></input>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter Email"
          value={updatedDetails.email}
          onChange={changeHandler}
        ></input>
        <input
          id="phone"
          name="phone"
          type="number"
          placeholder="Enter Phone Number"
          value={updatedDetails.phone}
          onChange={changeHandler}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EditForm;
