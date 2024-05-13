import { Divider } from "@mui/material"
import About from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"
import Skills from "./sections/Skills/Skills"
import Footer from "../../components/Footer/Footer"


const Home = () => {


    return (
      <>
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
  