import React from "react";
import styles from "./EducationStyles.module.css";
import EducationCard from "./EducationCard";
import umdLogo from "../../assets/umd.png";
import deanzaLogo from "../../assets/deanza.jpeg";
import educationLogo from "../../assets/graduation-cap.png";
function Education() {
  return (
    <section id="hero" className={styles.container}>
      <h1>Education</h1>

      <div className={styles.educationContainer}>
        <EducationCard
          src={umdLogo}
          uni="UMD"
          degree="B.S in Computer Science, 2024"
          uniName="University of Maryland, College Park, MD"
          link="https://umd.edu"
        ></EducationCard>
        <hr></hr>
        <EducationCard
          src={deanzaLogo}
          uni="DE Anza"
          degree="Associate Degree, 2021"
          uniName="De Anza College, Cupertino, CA"
          link="https://www.deanza.edu"
        ></EducationCard>
      </div>
    </section>
  );
}

export default Education;
