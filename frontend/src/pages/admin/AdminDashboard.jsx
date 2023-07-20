import React from "react";
import CV from "../../assets/CV/CV alternance.pdf";
import styles from "./AdminDashboard.module.css";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

function AdminDashboard() {
  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.content}>
        <div>
          <div className={styles.hello}>SALUT</div>
          <div className={styles.name}>
            Je suis <span>Messaoudene Jawad</span>
          </div>
          <div className={styles.work}>Je suis développeur web junior</div>
          <br />
          <div className={styles.experience_time}>+5 mois</div>
          <div className={styles.experiences}>
            Expérience en développeur web
          </div>

          <a
            href={CV}
            download="JawadMessaoudene"
            target="_blank"
            rel="noreferrer"
            className="btn"
            style={{
              marginTop: "20px",
              marginLeft: "var(--landing-safe-left)",
            }}
          >
            Télécharger CV
          </a>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
