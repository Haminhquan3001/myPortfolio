import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";

function App() {
 
  return (
    <>
      <Hero />
      <Projects />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
