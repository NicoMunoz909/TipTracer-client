import React from "react";
import ConfirmButton from "../ConfirmButton";
import CancelButton from "../CancelButton";

const CreateForm = ({ formatDate, onSubmit, onCancel }) => {
  return (
    <div className="formModal-form">
      <h2>Nueva Mesa</h2>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="nombre">
          Nombre
          <input type="text" name="nombre" id="nombre" required />
        </label>
        <label htmlFor="total">
          Total
          <input type="number" name="total" id="total" required />
        </label>
        <div className="formModal-form__propinas">
          <label htmlFor="propina">
            Propina
            <input type="number" name="propina" id="propina" required />
          </label>
          <label htmlFor="tipoPropina">
            Tipo
            <select name="tipoPropina" id="tipoPropina">
              <option value="Tarjeta">T</option>
              <option value="Efectivo">FT</option>
            </select>
          </label>
        </div>
        <label htmlFor="fecha">
          Fecha
          <input type="date" name="fecha" id="fecha" defaultValue={formatDate(new Date())} />
        </label>
        <div className="formModal-form__buttons">
          <ConfirmButton type="submit" />
          <CancelButton type="reset" onClick={onCancel} />
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
