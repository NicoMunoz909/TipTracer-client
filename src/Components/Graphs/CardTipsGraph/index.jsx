import "../Graph.css";
import { TbCreditCard } from "react-icons/tb";

const CardTipsGraph = ({ amount }) => {
  return (
    <div className="graph-container">
      <TbCreditCard></TbCreditCard>
      {amount}
    </div>
  );
};

export default CardTipsGraph;
