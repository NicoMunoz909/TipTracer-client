import "./Infobar.css";
import CardTipsGraph from "../Graphs/CardTipsGraph";
import CashTipsGraph from "../Graphs/CashTipsGraph";
import TotalGraph from "../Graphs/TotalGraph";
import BalanceGraph from "../Graphs/BalanceGraph";

const Infobar = ({ amounts }) => {
  return (
    <div className="infobar-container">
      <TotalGraph amount={amounts.total} />
      <CardTipsGraph amount={amounts.cardTips} />
      <CashTipsGraph amount={amounts.cashTips} />
      <BalanceGraph
        amount={Math.trunc(amounts.cardTips - amounts.total * 0.05)}
      />
    </div>
  );
};

export default Infobar;
