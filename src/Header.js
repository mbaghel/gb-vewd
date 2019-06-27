import React from "react";
import "./Header.css";

const Header = ({ pathname }) => (
  <h1 className="header-title">
    {pathname === "/" ? "Home" : pathname[1].toUpperCase() + pathname.slice(2)}
  </h1>
);

export default Header;
