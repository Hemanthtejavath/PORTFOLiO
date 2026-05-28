import { Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/education" Component={Education} />
        <Route path="/projects" Component={Projects} />
        <Route path="/skills" Component={Skills} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
