import React, { useState, useEffect } from "react";
import APIService from "../../services/APIService";
import { notifyError } from "../../services/ToastNotificationService";
import TechnologyDetails from "../../components/admin/TechnologyDetails";
import Modal from "../../components/admin/Modal";
import AddTechnology from "../../components/admin/AddTechnology";
import EditTechnology from "../../components/admin/EditTechnology";
import DeleteTechnology from "../../components/admin/DeleteTechnology";
import styles from "./AdminTechnology.module.css";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

export default function AdminTechnology() {
  const [technologies, setTechnologies] = useState(null);
  const [isShow, setIsShow] = useState({
    modalAdd: false,
    modalEdit: false,
    modalDelete: false,
  });
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  useEffect(() => {
    try {
      APIService.get("/technologys").then((res) => {
        setTechnologies(res.data);
      });
    } catch (error) {
      if (error.request.status === 401) {
        notifyError(`${error.request.status} : La requête a échoué.`);
      }
    }
  }, [isShow]);

  const modalClassName =
    isShow.modalAdd || isShow.modalEdit || isShow.modalDelete
      ? "modal-container show"
      : "modal-container hide";

  return (
    <>
      <Header />
      <Navbar />
      <main className={styles.technology_page}>
        <div className={styles.title}>Technologies</div>
        <button
          type="button"
          className={styles.add}
          onClick={() => setIsShow({ modalAdd: true })}
        >
          Ajouter une technologie
        </button>
        {technologies && technologies.length !== 0 ? (
          <ul className={styles.list_technology}>
            {technologies.map((technologie) => (
              <TechnologyDetails
                key={technologie.id}
                technology={technologie}
                selectedTechnology={selectedTechnology}
                setSelectedTechnology={setSelectedTechnology}
                setIsShow={setIsShow}
              />
            ))}
          </ul>
        ) : (
          <p className={styles.no_technology}>Aucune technologie disponible.</p>
        )}

        <div className={modalClassName}>
          {isShow.modalAdd && (
            <Modal
              component={<AddTechnology setIsShow={setIsShow} />}
              setIsShow={setIsShow}
            />
          )}
          {isShow.modalEdit && (
            <Modal
              component={
                <EditTechnology
                  selectedTechnology={selectedTechnology}
                  setSelectedTechnology={setSelectedTechnology}
                  setIsShow={setIsShow}
                />
              }
              setIsShow={setIsShow}
            />
          )}
          {isShow.modalDelete && (
            <Modal
              component={
                <DeleteTechnology
                  selectedTechnology={selectedTechnology}
                  setSelectedTechnology={setSelectedTechnology}
                  setIsShow={setIsShow}
                />
              }
              setIsShow={setIsShow}
            />
          )}
        </div>
      </main>
    </>
  );
}
