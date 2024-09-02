import React from "react";

import styles from "./layout.module.css";

import { FaGithub } from "react-icons/fa";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Reza Shirali | Timer - ReactJS</h1>
        <a href="https://github.com/Reza-Shirali" target="_blank">
          <FaGithub className={styles.icon} />
        </a>
      </header>
      {children}
      <footer className={styles.footer}>
        <h3>Developed By Reza with ❤️</h3>
      </footer>
    </>
  );
}

export default Layout;
