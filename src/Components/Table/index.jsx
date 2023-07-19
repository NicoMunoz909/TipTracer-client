import "./Table.css";
import TotalGraph from "../Graphs/TotalGraph";
import CardTipsGraph from "../Graphs/CardTipsGraph";
import { TbEdit } from "react-icons/tb";
import { BsTrash } from "react-icons/bs";
import BalanceGraph from "../Graphs/BalanceGraph";
import CashTipsGraph from "../Graphs/CashTipsGraph";

const Table = ({ item, onEdit, onDelete }) => {
  const date = new Date(item.fecha + "T00:00:00");

  return (
    <div className="table-container">
      <div className="table-info">
        <div className="table-info__row">
          <div className="table-info__name">
            <p>Mesa: {item.nombre}</p>
          </div>
          <div className="table-info__date">
            <p style={{ textTransform: "capitalize" }}>
              {date.toLocaleDateString("es-MX", {
                weekday: "short",
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
              })}
            </p>
          </div>
        </div>
        <div className="table-info__row">
          <div className="table-info__total">
            <TotalGraph amount={item.total} />
          </div>
          <div className="table-info__tip">
            {item.tipoPropina === "Tarjeta" ? (
              <CardTipsGraph amount={item.propina} />
            ) : (
              <CashTipsGraph amount={item.propina} />
            )}
          </div>
          <div className="table-info__balance">
            <BalanceGraph
              amount={Math.trunc(item.propina - item.total * 0.05)}
            />
          </div>
        </div>
      </div>
      <div className="table-controls">
        <TbEdit onClick={onEdit}></TbEdit>
        <BsTrash onClick={onDelete}></BsTrash>
      </div>
    </div>
  );
};

export default Table;
