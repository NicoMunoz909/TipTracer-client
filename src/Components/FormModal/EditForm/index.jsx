import React from "react";

const EditForm = ({ formatDate, onSubmit, onCancel, table }) => {
  return (
    <div className="formModal-form">
      <h2>Modificar Mesa</h2>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="nombre">
          Nombre
          <input
            type="text"
            name="nombre"
            id="nombre"
            defaultValue={table.nombre}
          />
        </label>
        <label htmlFor="total">
          Total
          <input
            type="number"
            name="total"
            id="total"
            defaultValue={table.total}
          />
        </label>
        <div className="formModal-form__propinas">
          <label htmlFor="propina">
            Propina
            <input
              type="number"
              name="propina"
              id="propina"
              defaultValue={table.propina}
            />
          </label>
          <label htmlFor="tipoPropina">
            Tipo
            <select
              name="tipoPropina"
              id="tipoPropina"
              defaultValue={table.tipoPropina}
            >
              <option value="Tarjeta">T</option>
              <option value="Efectivo">FT</option>
            </select>
          </label>
        </div>
        <label htmlFor="fecha">
          Fecha
          <input
            type="date"
            name="fecha"
            id="fecha"
            defaultValue={table.fecha}
          />
        </label>
        <div className="formModal-form__buttons">
          <button type="submit">Modificar</button>
          <button type="reset" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
