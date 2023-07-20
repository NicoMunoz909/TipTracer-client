import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../../Assets/logo.png";

const Home = () => {
  return (
    <div className="home-container">
      <img src={logo} alt="" />
      <div>
        <button className="home-buttons">
          <Link to="diario">Diario</Link>
        </button>
        <button className="home-buttons">
          <Link to="semanal">Semanal</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
