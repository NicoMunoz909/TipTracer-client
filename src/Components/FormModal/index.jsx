import CreateForm from "./CreateForm";
import DeleteConfirmation from "./DeleteConfirmaton";
import EditForm from "./EditForm";
import "./FormModal.css";

const FormModal = ({
  formFlag,
  formatDate,
  onCreate,
  onEdit,
  onDelete,
  onCancel,
  tableInfo,
}) => {
  const renderComponent = () => {
    switch (formFlag) {
      case "Create":
        return (
          <CreateForm
            formatDate={formatDate}
            onSubmit={onCreate}
            onCancel={onCancel}
          />
        );
      case "Edit":
        return (
          <EditForm
            formatDate={formatDate}
            onSubmit={onEdit}
            onCancel={onCancel}
            table={tableInfo}
          />
        );
      case "Delete":
        return <DeleteConfirmation onConfirm={onDelete} onCancel={onCancel} />;
      default:
        break;
    }
  };

  return <div className="formModal-container">{renderComponent()}</div>;
};

export default FormModal;
