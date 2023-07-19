import "../Graph.css";
import { TbMoneybag } from "react-icons/tb";

const TotalGraph = ({ amount }) => {
  return (
    <div className="graph-container">
      <TbMoneybag></TbMoneybag>
      {amount}
    </div>
  );
};

export default TotalGraph;
