import React from "react";
import Tools from "./Tools";
import styles from "./ProjectCardStyle.module.css";
function ProjectCard({ src, link, projectTitle, desc, toolsList, toolsLang }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${projectTitle} logo`}></img>
      <h3>{projectTitle}</h3>
      <p>{desc}</p>
      <ul className={styles.skills}>
        {toolsList.map((src, idx) => (
          <Tools key={idx} src={src} lang={toolsLang[idx]} />
        ))}
      </ul>
    </a>
  );
}

export default ProjectCard;
