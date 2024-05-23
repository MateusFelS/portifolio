import { Divider } from "@mui/material";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <section id="about">
        <About />
      </section>
      <Divider />
      <section id="skills">
        <Skills />
      </section>
      <Divider />
      <section id="projects">
        <Projects />
      </section>
      <Divider />
      <Footer />
    </>
  );
};

export default Home;
