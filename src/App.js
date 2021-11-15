import "./main.scss";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import {useRef} from "react";

const App = () => {   
  const aboutMe = useRef(null);  
  const projects = useRef(null);
  const contacts = useRef(null);  
  return (
    <>
      <Navbar         
        aboutMe={aboutMe}
        projects={projects}
        contacts={contacts}         
      />
      <Home
        aboutMe={aboutMe}               
      />
      <About
        aboutMe={aboutMe}                
        contacts={contacts}
      />
      <Projects 
        projects={projects}
      />
    </>
  );
};

export default App;
