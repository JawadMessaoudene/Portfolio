import * as Yup from "yup";

export default function handleErrors() {}

export const technologySchema = Yup.object({
  technology_name: Yup.string().required("La technologie doit être nommé."),
});
