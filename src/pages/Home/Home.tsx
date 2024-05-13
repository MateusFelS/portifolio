import { Divider } from "@mui/material"
import About from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"
import NavBar from "../../components/NavBar/NavBar"
import Skills from "./sections/Skills/Skills"
import Footer from "../../components/Footer/Footer"


const Home = () => {


    return (
      <>
        <NavBar/>
        <Hero />
        <About />      
        <Divider />
        <Skills />
        <Projects />
        <Divider />
        <Footer />
      </>
    )
  }
  
  export default Home
  