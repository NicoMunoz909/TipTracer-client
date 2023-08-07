import React from "react";
import ConfirmButton from "../ConfirmButton";
import CancelButton from "../CancelButton";

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
  return (
    <div className="formModal-form">
      <h2>¿Borrar mesa?</h2>
      <div className="formModal-form__buttons">
        <ConfirmButton onClick={onConfirm} />
        <CancelButton onClick={onCancel} />
      </div>
    </div>
  );
};

export default DeleteConfirmation;
