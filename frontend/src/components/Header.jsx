import React from "react";
import styles from "./Header.module.css";
import { useUserContext } from "../Contexts/UserContext";

function Header() {
  const { logout } = useUserContext();
  return (
    <header className={styles.header}>
      <span className={styles.header_name}>Messaoudene Jawad</span>
      <button type="button" className={styles.btn} onClick={() => logout()}>
        Se déconnecter
      </button>
    </header>
  );
}

export default Header;
