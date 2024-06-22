import styles from "./Skills.module.css";
import jsIcon from "../../assets/js.png";
import pythonIcon from "../../assets/python.png";
import javaIcon from "../../assets/java.png";
import cIcon from "../../assets/clang.png";
import cplusIcon from "../../assets/cplus.png";
import htmlIcon from "../../assets/html.png";
import rubyIcon from "../../assets/ruby.png";
import rustIcon from "../../assets/rust1.png";
import phpIcon from "../../assets/php.png";
import cssIcon from "../../assets/css.png";
import ocamlIcon from "../../assets/ocaml.jpg";
import dartIcon from "../../assets/dart.png";
import githubLight from "../../assets/githubLight.png";
import githubDark from "../../assets/githubDark.png";

import reactIcon from "../../assets/react.png";
import vscodeIcon from "../../assets/vscode.png";
import androidIcon from "../../assets/android.png";
import bootstrapIcon from "../../assets/bootstrap.png";
import awsIcon from "../../assets/aws.png";
import expressJSIcon from "../../assets/express.png";
import nodeJSIcon from "../../assets/nodejs.png";
import nextJSIcon from "../../assets/nextjs.png";
import mongoDBIcon from "../../assets/mongodb.svg";
import redisIcon from "../../assets/redis.png";
import tailwindIcon from "../../assets/tailwind.png";
import mysqlIcon from "../../assets/mysql.png";
import flutterIcon from "../../assets/flutter.png";
import linuxIcon from "../../assets/linux.png";
import dockerIcon from "../../assets/docker.png";
import msOfficeIcon from "../../assets/office.png";
import SkillsList from "./SkillsList";
import { useTheme } from "../../Theme/Theme";

function Skills() {
  const { theme, toggleTheme } = useTheme();
  const gitIcon = theme === "light" ? githubDark : githubLight;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <h2 className="sectionTitle">| Languages </h2>
      <div className={styles.skillList}>
        <SkillsList src={jsIcon} lang="Javascript"></SkillsList>
        <SkillsList src={pythonIcon} lang="Python"></SkillsList>
        <SkillsList src={dartIcon} lang="Dart"></SkillsList>
        <SkillsList src={javaIcon} lang="Java"></SkillsList>
        <SkillsList src={cIcon} lang="C"></SkillsList>
        <SkillsList src={cplusIcon} lang="C++"></SkillsList>
        <SkillsList src={htmlIcon} lang="HTML"></SkillsList>
        {/* CSS, PHP, Ruby, Rust.  */}
        <SkillsList src={cssIcon} lang="CSS"></SkillsList>
        <SkillsList src={phpIcon} lang="PHP"></SkillsList>
        <SkillsList src={rubyIcon} lang="Ruby"></SkillsList>
        <SkillsList src={rustIcon} lang="Rust"></SkillsList>
        <SkillsList src={ocamlIcon} lang="Ocaml"></SkillsList>
      </div>
      <hr></hr>
      <h2 className="sectionTitle">| Framework/Database </h2>
      <div className={styles.skillList}>
        <SkillsList src={reactIcon} lang="React"></SkillsList>
        {/* Bootstrap, Express.js, NodeJS, NextJS, MongoDB, MySQL, Flutter, Tailwind, Redis. */}
        <SkillsList src={bootstrapIcon} lang="Bootstrap"></SkillsList>
        <SkillsList src={expressJSIcon} lang="Express.js"></SkillsList>
        <SkillsList src={nodeJSIcon} lang="NodeJS"></SkillsList>
        <SkillsList src={nextJSIcon} lang="NextJS"></SkillsList>
        <SkillsList src={mongoDBIcon} lang="MongoDB"></SkillsList>
        <SkillsList src={mysqlIcon} lang="MySQL"></SkillsList>
        <SkillsList src={flutterIcon} lang="Flutter"></SkillsList>
        <SkillsList src={tailwindIcon} lang="Tailwind"></SkillsList>
        <SkillsList src={redisIcon} lang="Redis"></SkillsList>
      </div>
      <hr></hr>
      <h2 className="sectionTitle">| Tools </h2>
      <div className={styles.skillList}>
        <SkillsList src={awsIcon} lang="AWS"></SkillsList>
        <SkillsList src={vscodeIcon} lang="VS Code"></SkillsList>
        <SkillsList src={androidIcon} lang="Android Studio"></SkillsList>
        <SkillsList src={gitIcon} lang="Github"></SkillsList>
        <SkillsList src={msOfficeIcon} lang="MS Office"></SkillsList>
        <SkillsList src={dockerIcon} lang="Docker"></SkillsList>
        <SkillsList src={linuxIcon} lang="Linux / WSL"></SkillsList>
      </div>
    </section>
  );
}

export default Skills;
