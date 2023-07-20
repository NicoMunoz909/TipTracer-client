import React from "react";
import Daily from "./Daily";
import Weekly from "./Weekly";
import "./Datebar.css";

const Datebar = ({ date, onChange, mode }) => {
  return (
    <div className="datebar-container">
      {mode === "Daily" && <Daily onChange={onChange} date={date} />}
      {mode === "Weekly" && <Weekly onChange={onChange} date={date} />}
    </div>
  );
};

export default Datebar;
