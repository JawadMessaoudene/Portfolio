import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import styles from "./AdminContact.module.css";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

function AdminContact() {
  const schema = yup
    .object({
      name: yup
        .string()
        .max(50)
        .required("Merci de rentrer votre nom et prénom"),
      email: yup
        .string()
        .email("Merci de renter une adresse mail valide")
        .max(255)
        .required("Merci de rentrer une adresse mail"),
      message: yup.string().required("Merci de rentrer un message"),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendFeedback = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables, "_uUHXD2-4oIN0ocBD")
      .then(() => {
        console.warn("success");
      })
      .catch((err) => {
        console.warn("Il y a une erreur", err);
      });
  };

  const [showMessage, setShowMessage] = useState(false);

  const onSubmit = (data, r) => {
    // Réinitialiser le formulaire
    r.target.reset();

    // Appeler la fonction pour envoyer le message
    const templateId = "template_8buwqbr";
    const serviceId = "service_qqwok2e";
    sendFeedback(serviceId, templateId, {
      name: data.name,
      email: data.email,
      message: data.message,
      reply_to: r.target.reset(),
    });

    setShowMessage(true);
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.container}>
        <div className={styles.section_contact__content}>
          <div>
            <h2 className={styles.title}>Allons travailler</h2>
            <p className={styles.empty_data}>Dites-moi tout</p>
          </div>
          <form
            className={styles.contact_form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className={styles.form_group}>
                <label htmlFor="name">Nom et Prenom :</label>
                <input
                  className={styles.form_control}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nom et Prenom"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("name")}
                />

                {errors.name && (
                  <p className={styles.c_yup}>{errors.name.message}</p>
                )}
              </div>
              <div className={styles.form_group}>
                <label htmlFor="email">Adresse mail :</label>
                <input
                  className={styles.form_control}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="exemple@gmail.com"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("email")}
                />
                {errors.email && (
                  <p className={styles.c_yup}>{errors.email.message}</p>
                )}
              </div>
              <div className={styles.form_group}>
                <label htmlFor="message"> Message :</label>
                {/* eslint-disable react/self-closing-comp */}
                <textarea
                  className={styles.form_control}
                  placeholder="Merci de renseigner vos questions ou commentaires"
                  id="message"
                  cols="20"
                  rows="10"
                  name="message"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <p className={styles.c_yup}>{errors.message.message}</p>
                )}
              </div>
              <button className="btn" type="submit" value="Envoyer">
                Envoyer un message
              </button>
              {showMessage && (
                <div className={styles.succes}>
                  <p>
                    😀 Merci pour votre message, il sera traité au plus vite 😀
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminContact;
