import React from "react";
import Daily from "./Daily";
import Weekly from "./Weekly";
import "./Datebar.css";

const Datebar = ({ date, onChange, mode }) => {
  return (
    <div className="datebar-container">
      {mode === 0 && <Daily onChange={onChange} date={date} />}
      {mode === 1 && <Weekly onChange={onChange} date={date} />}
    </div>
  );
};

export default Datebar;
