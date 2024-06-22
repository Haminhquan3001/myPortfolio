import styles from "./Projects.module.css";
import dineInLight from "../../assets/dinein-logo-light.png";
import dineInDark from "../../assets/dinein-logo-dark.png";
import harmonyScoutIconLight from "../../assets/musicLight.png";
import terpStrongIcon from "../../assets/terpStrong.png";
import { useTheme } from "../../Theme/Theme";
import ProjectCard from "./ProjectCard";

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

import reactIcon from "../../assets/react.png";
import awsIcon from "../../assets/aws.png";
import expressJSIcon from "../../assets/express.png";
import nodeJSIcon from "../../assets/nodejs.png";
import dartIcon from "../../assets/dart.png";
import nextJSIcon from "../../assets/nextjs.png";
import mongoDBIcon from "../../assets/mongodb.svg";
import redisIcon from "../../assets/redis.png";
import tailwindIcon from "../../assets/tailwind.png";
import mysqlIcon from "../../assets/mysql.png";
import flutterIcon from "../../assets/flutter.png";

function Projects() {
  const { theme, toggleTheme } = useTheme();

  const dineInIcon = theme === "light" ? dineInLight : dineInDark;
  //   const harmonyScoutIcon =
  //     theme === "light" ? harmonyScoutIconLight : harmonyScoutIconDark;
  const harmonyScoutIcon = harmonyScoutIconLight;

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={dineInIcon}
          link="https://github.com/Haminhquan3001/DineIn"
          projectTitle="DineIn"
          desc="Restaurant Resevation App"
          toolsList={[flutterIcon, dartIcon, redisIcon]}
          toolsLang={["Flutter", "Dart", "Redis"]}
        ></ProjectCard>

        <ProjectCard
          src={harmonyScoutIcon}
          link="https://github.com/Haminhquan3001/HarmonyScout"
          projectTitle="Harmony Scout"
          desc="Music Platform"
          toolsList={[
            jsIcon,
            htmlIcon,
            cssIcon,
            expressJSIcon,
            nodeJSIcon,
            mongoDBIcon,
          ]}
          toolsLang={[
            "Javascript",
            "HTML",
            "CSS",
            "ExpressJS",
            "NodeJS",
            "MongoDB",
          ]}
        ></ProjectCard>

        <ProjectCard
          src={terpStrongIcon}
          link="https://github.com/Haminhquan3001/TerpStrong"
          projectTitle="TerpStrong"
          desc="A gym app for UMD Students (Terp)"
          toolsList={[
            jsIcon,
            htmlIcon,
            cssIcon,
            reactIcon,
            expressJSIcon,
            mysqlIcon,
          ]}
          toolsLang={[
            "Javascript",
            "HTML",
            "CSS",
            "React",
            "ExpressJS",
            "MySQL",
          ]}
        ></ProjectCard>
      </div>
    </section>
  );
}

export default Projects;
