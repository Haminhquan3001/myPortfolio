import styles from "./EducationCardStyle.module.css";
import graduationIcon from "../../assets/mortarboard.png";
function EducationCard({ src, uni, degree, uniName, link }) {
  return (
    <div className={styles.container}>
      <div className={styles.uniContainer}>
        <img
          className={styles.graduationIcon}
          src={graduationIcon}
          alt={`${uni} logo`}
        ></img>
        <h3>{degree}</h3>
      </div>
      <div className={styles.uniContainer}>
        <a href={link} target="_blank">
          <img className={styles.uniIcon} src={src} alt={`${uni} logo`}></img>
        </a>

        <p>{uniName}</p>
      </div>
    </div>
  );
}

export default EducationCard;
