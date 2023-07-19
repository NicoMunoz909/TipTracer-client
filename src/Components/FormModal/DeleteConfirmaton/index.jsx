import React from "react";

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
  return (
    <div className="formModal-form">
      <h2>¿Borrar mesa?</h2>
      <div className="formModal-form__buttons">
        <button onClick={onConfirm}>Borrar</button>
        <button onClick={onCancel}>Cancelar</button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
