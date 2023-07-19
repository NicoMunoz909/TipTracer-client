import "../Graph.css";
import { BsCash } from "react-icons/bs";

const CashTipsGraph = ({ amount }) => {
  return (
    <div className="graph-container">
      <BsCash></BsCash>
      {amount}
    </div>
  );
};

export default CashTipsGraph;
