import React from "react";
import styles from "./ToolsStyle.module.css";
function Tools({ src, lang }) {
  return (
    <li className={styles.items}>
      <img src={src} alt={`${lang} icon`} className={styles.tools}></img>
      {/* <p className={styles.language}>{lang}</p> */}
    </li>
  );
}

export default Tools;
