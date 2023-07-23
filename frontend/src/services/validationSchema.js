import * as Yup from "yup";

export const technologySchema = Yup.object({
  technology_name: Yup.string().required("La technologie doit être nommé."),
});

const validationSchemaLogin = Yup.object().shape({
  email: Yup.string().email("Email invalide").required("Requis"),

  password: Yup.string()
    .min(7, "Le mot de passe doit comporter 7 caractères minimum")
    .required("Requis"),
});
const validationSchemas = {
  validationSchemaLogin,
};

export default validationSchemas;
