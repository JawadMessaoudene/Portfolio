import PropTypes from "prop-types";
import notifySuccess, {
  notifyError,
} from "../../services/ToastNotificationService";
import APIService from "../../services/APIService";
import styles from "./DeleteTechnology.module.css";

export default function DeleteTechnology({
  selectedTechnology,
  setSelectedTechnology,
  setIsShow,
}) {
  // Submit Delete Technology Request
  const handleDelete = async () => {
    try {
      const res = await APIService.delete(`/technologys/${selectedTechnology}`);
      if (res) {
        notifySuccess("La technologie a bien été supprimé.");
        setSelectedTechnology();
        setIsShow({ modalDelete: false });
      }
      throw new Error();
    } catch (err) {
      if (err.request?.status === 500) {
        notifyError("La requête a échouée.");
      }
    }
  };

  return (
    <div className={styles.contenerdelete}>
      <h1 className={styles.titledelete}>Supprimer cette technologie ?</h1>
      <div className={styles.confirmationdelete}>
        <button type="button" className={styles.btn_yes} onClick={handleDelete}>
          Oui
        </button>
        <button
          type="button"
          className={styles.btn_no}
          onClick={() => setIsShow({ modalDelete: false })}
        >
          Non
        </button>
      </div>
    </div>
  );
}

DeleteTechnology.propTypes = {
  selectedTechnology: PropTypes.number.isRequired,
  setSelectedTechnology: PropTypes.func.isRequired,
  setIsShow: PropTypes.func.isRequired,
};
