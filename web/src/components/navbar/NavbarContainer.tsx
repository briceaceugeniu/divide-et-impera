import React from "react";
import css from "./Navbar.module.css";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  return (
    <div className={css.container}>
      <Navbar />
    </div>
  );
};

export default NavbarContainer;
