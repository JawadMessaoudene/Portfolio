import { useState } from "react";
import PropTypes from "prop-types";
import { technologySchema } from "../../services/validationSchema";
import notifySuccess, {
  notifyError,
} from "../../services/ToastNotificationService";
import APIService from "../../services/APIService";
import FormError from "../FormError";
import styles from "./AddTechnology.module.css";

export default function AddTechnology({ setIsShow }) {
  const [technologyInfos, setTechnologyInfos] = useState({
    technology_name: "",
  });

  const [errors, setErrors] = useState(null);

  // Submit Add Technology Request
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await APIService.post(`/technologys`, technologyInfos);
      if (res) {
        notifySuccess("La technologie a été ajoutée.");
        setIsShow({ modalAdd: false });
      } else {
        throw new Error();
      }
    } catch (err) {
      if (err.request.status === 401) {
        notifyError(`${err.request.status} : La requête a échoué.`);
      } else {
        notifyError("Une erreur dans la saisie.");
      }
    }
  };

  const handleChange = async (e) => {
    setTechnologyInfos({
      ...technologyInfos,
      [e.target.name]: e.target.value,
    });
    try {
      const isValid = await technologySchema.validate(technologyInfos, {
        abortEarly: false,
      });
      if (isValid) {
        setErrors(null);
      }
    } catch (err) {
      setErrors(err.errors);
    }
  };

  return (
    <div className={styles.conteneradd}>
      <h1 className={styles.titleadd}>Une nouvelle technologie ?</h1>
      <form
        action="addTechnology"
        className={styles.formadd}
        onSubmit={handleSubmit}
      >
        {errors && <FormError errors={errors} />}
        <div className="flex flex-col">
          <input
            type="text"
            name="technology_name"
            id="technology_name"
            placeholder="Nom de la technologie"
            required=""
            className={styles.inputadd}
            onChange={handleChange}
          />
        </div>
        <div className={styles.submitadd}>
          <button type="submit" className="btn">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
}

AddTechnology.propTypes = {
  setIsShow: PropTypes.func.isRequired,
};
