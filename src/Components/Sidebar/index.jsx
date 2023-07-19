import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const hideSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = "0";
  };

  return (
    <div id="sidebar" className="sidebar-container">
      <RxCross1 onClick={hideSidebar}></RxCross1>
      <div className="sidebar-content">
        <Link to={"/dia"}>Dia</Link>
        <Link to={"/semanal"}>Semanal</Link>
        <Link to={"/mensual"}>Mensual</Link>
        <Link to={"/personalizado"}>Personalizado</Link>
      </div>
    </div>
  );
};

export default Sidebar;
