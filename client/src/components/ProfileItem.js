import React from "react";

import { Link } from "react-router-dom";

const ProfileItem = (props) => {
  return (
    <div>
      <li>
        {props.userDetails.name} | {props.userDetails.email} |
        {props.userDetails.phone} |
        <Link to={`/page/edit/${props.userDetails._id}`}>Edit</Link>
      </li>
    </div>
  );
};

export default ProfileItem;
