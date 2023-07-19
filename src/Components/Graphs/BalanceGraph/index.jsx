import "../Graph.css";
import { TbPlusMinus } from "react-icons/tb";

const BalanceGraph = ({ amount }) => {
  return (
    <div className="graph-container">
      <TbPlusMinus
        style={{ border: "2px solid black", borderRadius: "5px" }}
      ></TbPlusMinus>
      {amount}
    </div>
  );
};

export default BalanceGraph;
