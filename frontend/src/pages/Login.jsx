import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import APIService from "../services/APIService";
import { useUserContext } from "../Contexts/UserContext";
import validationSchemas from "../services/validationSchema";
import { notifyError } from "../services/ToastNotificationService";

export default function Login() {
  const { login } = useUserContext();
  const navigate = useNavigate();
  const loginSchema = validationSchemas.validationSchemaLogin;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: () => {
      APIService.post(`/login`, formik.values)
        .then(({ data: user }) => {
          login(user);
          navigate("/admin/dashboard");
        })
        .catch((error) => {
          if (error.response?.status === 401) {
            notifyError("Les informations d'identification sont incorrectes.");
          } else {
            notifyError(
              "Une erreur s'est produite. Veuillez réessayer plus tard."
            );
          }
        });
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.section_contact__content}>
        <h3 className={styles.title}>Se connecter</h3>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email" className={styles.label}>
              Votre identifiant
            </label>
            <input
              type="text"
              name="email"
              id="email"
              required="required"
              placeholder="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className={styles.input}
            />
            {formik.errors.email && (
              <div className={styles.error}>{formik.errors.email}</div>
            )}
            <label htmlFor="password" className={styles.label}>
              Votre mot de passe
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required="required"
              placeholder="mot de passe"
              onChange={formik.handleChange}
              value={formik.values.password}
              className={styles.input}
            />
            {formik.errors.password && (
              <div className={styles.error}>{formik.errors.password}</div>
            )}
          </div>
          <button className={styles.btn} type="submit">
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
}
