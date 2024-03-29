import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
const Header = (props) => {
  debugger;
  return (
    <header className={classes.header}>
      <img src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr"></img>
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};
export default Header;
