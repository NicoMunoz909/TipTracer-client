import { useContext, useEffect, useMemo, useState } from "react";
import "./App.css";
import { DateContext } from "./Contexts/DateContext";
import Header from "./Components/Header";
import Infobar from "./Components/Infobar";
import Table from "./Components/Table";
import FormModal from "./Components/FormModal";
import Datebar from "./Components/Datebar";
import Loader from "./Components/Loader";
import Alert from "./Components/Alert";

function App() {
  const [date, setDate] = useState(new Date());
  const [tables, setTables] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState(undefined);
  const [formFlag, setFormFlag] = useState(undefined);
  const [mode, setMode] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const URL = "https://tiptracer.onrender.com/";

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

    const firstDay = new Date(date.getFullYear(), date.getMonth(), firstDayOfWeek);
    const lastDay = new Date(date.getFullYear(), date.getMonth(), lastDayOfWeek);

    return {
      firstDay,
      lastDay,
    };
  }

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

  const UrlQuery = useMemo(() => {
    const query =
      mode === 0
        ? `?fecha=${formatDate(date)}`
        : `?desde=${formatDate(getWeekRange(date).firstDay)}&hasta=${formatDate(getWeekRange(date).lastDay)}`;
    return query;
  }, [date, mode]);

  function fetchTables(query) {
    {
      setIsLoading(true);
      fetch(URL + query)
        .then((res) => res.json())
        .then((data) => {
          setTables(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          showAlert(err, "red");
        });
    }
  }

  useEffect(() => {
    fetchTables(UrlQuery);
  }, [date, UrlQuery, mode]);

  const handleCreate = (e) => {
    e.preventDefault();
    const formBody = {
      nombre: e.target[0].value,
      total: e.target[1].value,
      propina: e.target[2].value,
      tipoPropina: e.target[3].value,
      fecha: e.target[4].value,
    };
    fetch(URL, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formBody),
    })
      .then((res) => res.json())
      .then((data) => {
        showAlert(data.msg, "green");
        setIsFormOpen(false);
        setTables([
          ...tables,
          { ...data.mesa, total: parseInt(data.mesa.total), propina: parseInt(data.mesa.propina) },
        ]);
      })
      .catch((err) => {
        setIsLoading(false);
        showAlert(err);
      });
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
    fetch(URL + selectedTable.id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(formBody),
    })
      .then((res) => res.json())
      .then((data) => {
        showAlert(data.msg, "green");
        setIsFormOpen(false);
        console.log({ id: data.id, ...formBody });
        setTables(
          tables.map((t) => {
            if (t.id == data.id) {
              return {
                id: t.id,
                ...formBody,
                total: parseFloat(formBody.total),
                propina: parseFloat(formBody.propina),
              };
            } else {
              return t;
            }
          })
        );
      })
      .catch((err) => {
        setIsLoading(false);
        showAlert(err, "red");
      });
  };

  const handleDelete = () => {
    fetch(URL + selectedTable.id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        showAlert(data.msg, "green");
        setIsFormOpen(false);
        setTables(tables.filter((t) => t.id != data.id));
      })
      .catch((err) => {
        setIsLoading(false);
        showAlert(err, "red");
      });
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

  const hideAlert = () => {
    const alert = document.getElementById("alert");
    alert.style.transform = "translateY(calc(100% + 10vh))";
    alert.style.opacity = "0";
  };

  const showAlert = (text, color) => {
    const alert = document.getElementById("alert");
    alert.style.backgroundColor = color;
    alert.childNodes[0].innerHTML = text;
    alert.style.transform = "translateY(0%)";
    alert.style.opacity = "1";
    setTimeout(hideAlert, 1500);
  };

  return (
    <DateContext.Provider value={date}>
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
      <Header openForm={createTable} changeMode={setMode} isLoading={isLoading}></Header>
      <Datebar mode={mode} date={date} onChange={setDate}></Datebar>
      <Infobar amounts={amounts}></Infobar>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="tablesContainer">
          {tables.length === 0 && (
            <h2 style={{ textAlign: "center", height: "0px", margin: "0px" }}>No hay mesas que pobreza</h2>
          )}
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
      )}
      <Alert text={alert.text} background={alert.color} />
    </DateContext.Provider>
  );
}

export default App;
