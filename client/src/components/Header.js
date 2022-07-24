import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Register</Link>
        </li>
        <li>
          <Link to="/page">User Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
