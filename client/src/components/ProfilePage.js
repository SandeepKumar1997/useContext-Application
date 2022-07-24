import React, { useEffect } from "react";
import ProfileItem from "./ProfileItem";
import { useContext } from "react";
import { GlobalState } from "../store/context";

const ProfilePage = (props) => {
  const userCtx = useContext(GlobalState);
  const users = userCtx.state.userProfiles;

  useEffect(() => {
    userCtx.getUsers();
  }, [userCtx]);

  return (
    <div>
      {users.map((item) => (
        <ProfileItem key={item._id} userDetails={item} />
      ))}
    </div>
  );
};

export default ProfilePage;
