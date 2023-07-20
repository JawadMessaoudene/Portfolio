import React from "react";
import PropTypes from "prop-types";
import styles from "./ProjectPreview.module.css";

function ProjetPreview({ projet }) {
  return (
    <div className={styles.projet_preview}>
      <a href={projet.URL} target="_blank" rel="noopener noreferrer">
        <h3 className={styles.projet_titre}>{projet.titre}</h3>
      </a>

      <img src={projet.image} alt={projet.titre} style={{ maxWidth: "100%" }} />
    </div>
  );
}

ProjetPreview.propTypes = {
  projet: PropTypes.shape({
    URL: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjetPreview;
