import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Infobar from "./Components/Infobar";
import Table from "./Components/Table";
import Sidebar from "./Components/Sidebar";
import FormModal from "./Components/FormModal";
import Datebar from "./Components/Datebar";

function App({ mode }) {
  const [date, setDate] = useState(new Date());
  const [tables, setTables] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState(undefined);
  const [formFlag, setFormFlag] = useState(undefined);

  const amounts = tables.reduce(
    (totals, table) => {
      totals.total += table.total;
      if (table.tipoPropina === "Tarjeta") {
        totals.cardTips += table.propina;
      } else {
        totals.cashTips += table.propina;
      }
      return totals;
    },
    { total: 0, cardTips: 0, cashTips: 0 }
  );

  const formatDate = (date) => {
    return (
      date.toLocaleDateString("es-MX", { year: "numeric" }) +
      "-" +
      date.toLocaleDateString("es-MX", { month: "2-digit" }) +
      "-" +
      date.toLocaleDateString("es-MX", { day: "2-digit" })
    );
  };

  function getWeekRange(date) {
    let firstDayOfWeek = date.getDate() - date.getDay();
    if (date.getDay() === 0) {
      firstDayOfWeek -= 6;
    } else {
      firstDayOfWeek += 1;
    } // Calculate the first day of the week
    const lastDayOfWeek = firstDayOfWeek + 6; // Add six days to get the last day of the week

    const firstDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      firstDayOfWeek
    );
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      lastDayOfWeek
    );

    return {
      firstDay,
      lastDay,
    };
  }

  const fetchUrl =
    mode === "Daily"
      ? `https://tiptracer.onrender.com/?fecha=${formatDate(date)}`
      : `https://tiptracer.onrender.com/?fechaDesde=${formatDate(
          getWeekRange(date).firstDay
        )}&fechaHasta=${formatDate(getWeekRange(date).lastDay)}`;

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => setTables(data));
  }, [date, isFormOpen, fetchUrl]);

  const handleCreate = (e) => {
    e.preventDefault();
    const formBody = {
      nombre: e.target[0].value,
      total: e.target[1].value,
      propina: e.target[2].value,
      tipoPropina: e.target[3].value,
      fecha: e.target[4].value,
    };
    fetch(`https://tiptracer.onrender.com/`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formBody),
    });
    setIsFormOpen(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const formBody = {
      nombre: e.target[0].value,
      total: e.target[1].value,
      propina: e.target[2].value,
      tipoPropina: e.target[3].value,
      fecha: e.target[4].value,
    };
    fetch(`https://tiptracer.onrender.com/${selectedTable.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(formBody),
    });
    setIsFormOpen(false);
  };

  const handleDelete = () => {
    fetch(`https://tiptracer.onrender.com/${selectedTable.id}`, {
      method: "DELETE",
    });
    setIsFormOpen(false);
  };

  const createTable = () => {
    setFormFlag("Create");
    setIsFormOpen(true);
  };

  const editTable = (table) => {
    setFormFlag("Edit");
    setSelectedTable(table);
    setIsFormOpen(true);
  };

  const deleteTable = (table) => {
    setFormFlag("Delete");
    setSelectedTable(table);
    setIsFormOpen(true);
  };

  return (
    <div>
      <Sidebar></Sidebar>
      {isFormOpen && (
        <FormModal
          formatDate={formatDate}
          onCreate={handleCreate}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onCancel={() => setIsFormOpen(false)}
          tableInfo={selectedTable}
          formFlag={formFlag}
        />
      )}
      <Header openForm={createTable}></Header>
      <Datebar mode={mode} date={date} onChange={setDate}></Datebar>
      <Infobar amounts={amounts}></Infobar>
      {tables.length === 0 && (
        <h2 style={{ textAlign: "center", height: "0px", margin: "0px" }}>
          No hay mesas que pobreza
        </h2>
      )}
      <div className="tablesContainer">
        {tables.map((table) => {
          return (
            <Table
              key={table.id}
              item={table}
              onEdit={() => editTable(table)}
              onDelete={() => deleteTable(table)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
