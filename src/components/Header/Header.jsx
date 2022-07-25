import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import user from "../../assets/man.png";
import "./Header.scss";
const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <Link to={"/"}>
          <div className="logo">Moive App</div>
        </Link>{" "}
        <div className="user-image">
          <img src={user} alt="user" />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
