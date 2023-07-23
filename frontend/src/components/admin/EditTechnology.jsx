import { useState } from "react";
import PropTypes from "prop-types";
import { technologySchema } from "../../services/validationSchema";
import notifySuccess, {
  notifyError,
} from "../../services/ToastNotificationService";
import APIService from "../../services/APIService";
import FormError from "../FormError";
import styles from "./EditTechnology.module.css";

export default function EditTechnology({
  selectedTechnology,
  setSelectedTechnology,
  setIsShow,
}) {
  const [technologyInfos, setTechnologyInfos] = useState({
    technology_name: "",
  });
  const [errors, setErrors] = useState([]);

  // Submit Edit Technology Request
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (technologySchema.isValidSync(technologyInfos)) {
      try {
        const res = await APIService.put(
          `/technologys/${selectedTechnology}`,
          technologyInfos
        );
        if (res) {
          notifySuccess("La technologie a été modifié.");
          setSelectedTechnology();
          setIsShow({ modalEdit: false });
        } else throw new Error();
      } catch (err) {
        if (err.request?.status === 500) {
          notifyError("La requête a échouée.");
        }
      }
    } else notifyError("Une erreur dans la saisie");
  };

  const handleChange = async (e) => {
    setTechnologyInfos({
      ...technologyInfos,
      [e.target.name]: e.target.value,
    });
    try {
      const isValid = await technologySchema.isValid(technologyInfos, {
        abortEarly: false,
      });
      if (isValid) {
        setErrors([]);
      }
    } catch (err) {
      setErrors(err.errors);
    }
  };

  return (
    <div className={styles.conteneredit}>
      <h1 className={styles.titleedit}>Modifier cette technologie ?</h1>
      <form
        action="editTechnology"
        className={styles.formedit}
        onSubmit={handleSubmit}
      >
        {errors && <FormError errors={errors} />}
        <div className="flex flex-col">
          <input
            type="text"
            name="technology_name"
            id="technology_name"
            value={technologyInfos?.technology_name}
            placeholder="Nom de la technologie"
            required=""
            className={styles.inputedit}
            onChange={handleChange}
          />
        </div>
        <div className={styles.submitedit}>
          <button
            disabled={!technologySchema.isValidSync(technologyInfos)}
            type="submit"
            className="btn"
          >
            Modifier
          </button>
        </div>
      </form>
    </div>
  );
}

EditTechnology.propTypes = {
  selectedTechnology: PropTypes.number.isRequired,
  setSelectedTechnology: PropTypes.func.isRequired,
  setIsShow: PropTypes.func.isRequired,
};
