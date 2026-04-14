import Navbar from "./components/Navbar/navbar";
import Home from "./components/HomePage/home";
import About from "./components/AboutPage/about";
import Education from "./components/Education/education";
import Projects from "./components/Projects/projects";
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      {/* Later we can enable routing */}
      {/* <About /> */}
    </>
  );
}

export default App;
