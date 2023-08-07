import "../Graph.css";
import { TbPlusMinus } from "react-icons/tb";

const BalanceGraph = ({ amount }) => {
  return (
    <div className="graph-container">
      <TbPlusMinus></TbPlusMinus>
      {amount}
    </div>
  );
};

export default BalanceGraph;
