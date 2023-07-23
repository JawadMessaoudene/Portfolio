import React from "react";
import ProjetPreview from "../../components/admin/ProjectPreview";
import Gloomy from "../../assets/images/Gloomy.png";
import DailyExpat from "../../assets/images/Dailyexpat.png";
import Applevolonteers from "../../assets/images/Applevolonteers.png";
import Snake from "../../assets/images/Snake.png";
import styles from "./AdminProjects.module.css";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

function AdminProjects() {
  const projets = [
    {
      titre: "Gloomy la calculatrice",
      image: Gloomy,
      URL: "https://calculatrice-gloomy.netlify.app",
    },
    {
      titre: "Daily Expat",
      image: DailyExpat,
      URL: "https://daily-expat.netlify.app/",
    },
    {
      titre: "Apple volonteers",
      image: Applevolonteers,
      URL: "https://apple-volonteers.netlify.app",
    },
    {
      titre: "Jeu du serpent",
      image: Snake,
      URL: "https://snake-projet.netlify.app/",
    },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <h1 className={styles.title}>Projets</h1>
      <div className={styles.projects_screen}>
        <h4 className={styles.empty_data}>
          Voici une sélection de projets qui mettent en valeur mes compétences
          et mon expérience en développement web
        </h4>
        {projets.map((projet) => (
          <ProjetPreview key={projet.URL} projet={projet} />
        ))}
      </div>
    </>
  );
}

export default AdminProjects;
