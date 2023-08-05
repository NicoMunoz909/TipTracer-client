import React from "react";
import "./Header.css";
import { FaPlus } from "react-icons/fa";

function Header({ openForm, changeMode, isLoading }) {
  return (
    <div className="header-container">
      <div className="header__menu">
        <button onClick={() => openForm(true)} disabled={isLoading}>
          <FaPlus /> Nueva Mesa
        </button>
      </div>
      <div className="header__icon">
        <p style={{ textTransform: "capitalize" }}>
          {new Date().toLocaleDateString("es-MX", {
            weekday: "short",
            day: "2-digit",
            month: "2-digit",
          })}
        </p>
        <label htmlFor="mode">Modo:</label>
        <select
          name="mode"
          id="mode"
          onChange={(e) => changeMode(parseInt(e.target.value))}
          disabled={isLoading}
        >
          <option value={0}>Diario</option>
          <option value={1}>Semanal</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
