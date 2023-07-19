import React from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../Assets/logo.png";
import Clock from "./Clock";

function Header({ openForm }) {
  const showSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = "100vw";
  };

  return (
    <div className="header-container">
      <div className="header__menu">
        <GiHamburgerMenu onClick={showSidebar} />
      </div>
      <div className="header__icon">
        <button onClick={() => openForm(true)}>
          <img src={logo} alt="" />
        </button>
      </div>
      <Clock />
    </div>
  );
}

export default Header;
