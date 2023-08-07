import "./FormModal.css";
import { FaTimesCircle } from "react-icons/fa";

const CancelButton = ({ onClick, type }) => {
  return (
    <button className="formModal-form__cancel" type={type || ""} onClick={onClick}>
      <FaTimesCircle />
    </button>
  );
};

export default CancelButton;
