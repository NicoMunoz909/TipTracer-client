import "./FormModal.css";
import { FaCheckCircle } from "react-icons/fa";

const ConfirmButton = ({ onClick, type }) => {
  return (
    <button className="formModal-form__confirm" type={type || ""} onClick={onClick}>
      <FaCheckCircle />
    </button>
  );
};

export default ConfirmButton;
