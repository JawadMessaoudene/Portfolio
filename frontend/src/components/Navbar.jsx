import React from "react";
import { NavLink } from "react-router-dom";
import DashboardSvg from "./svg/DashboardSvg";
import TechnologySvg from "./svg/TechnologySvg";
import ProjectsSvg from "./svg/ProjectsSvg";
import ContactSvg from "./svg/ContactSvg";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.sections_nav}>
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? styles["sections-nav__item_active"]
              : styles.sections_nav_item
          }
        >
          <DashboardSvg />
        </NavLink>
        <NavLink
          to="/admin/technology"
          className={({ isActive }) =>
            isActive
              ? styles["sections-nav__item_active"]
              : styles.sections_nav_item
          }
        >
          <TechnologySvg />
        </NavLink>
        <NavLink
          to="/admin/projects"
          className={({ isActive }) =>
            isActive
              ? styles["sections-nav__item_active"]
              : styles.sections_nav_item
          }
        >
          <ProjectsSvg />
        </NavLink>
        <NavLink
          to="/admin/contact"
          className={({ isActive }) =>
            isActive
              ? styles["sections-nav__item_active"]
              : styles.sections_nav_item
          }
        >
          <ContactSvg />
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
