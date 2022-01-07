import React from "react";
import { useState, useEffect, useRef } from "react";


const Navbar = ({aboutMe, projects, contacts}) => {

  const [showNav, setShowNav] = useState(null);
  const burger = useRef(null)
  const navLink = useRef(null)

  const navControl = () => {
    if (showNav === 'close' || showNav === null) {
    setShowNav('open')
    } else {
    setShowNav('close')
    }
  }

  const handleClickOutside = (e) => {
       if (showNav != null) {
         if (!burger.current.contains(e.target)) {     
          if (!navLink.current.contains(e.target)) {      
      setShowNav('close');      
      }   
    }
   }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (

    <>
      <header>       
          <div className="logo" onClick={()=>window.scrollTo({top: 0, left: 0, behavior: "smooth"})}>
            <h1>GLXD</h1>
          </div>
          <nav>                 
       <div className={`nav-container-mobile ${showNav}`}  ref={navLink}>
       <ul className="nav-links-mobile">            
            <li onClick={()=>setShowNav('close')}><p onClick={()=>aboutMe.current.scrollIntoView({behavior: "smooth"})}>About</p></li>                        
            <li onClick={()=>setShowNav('close')}><p onClick={()=>projects.current.scrollIntoView({behavior: "smooth"})}>Projects</p></li>
            <li onClick={()=>setShowNav('close')}><p href="#">Contact</p></li> 
            <li onClick={()=>setShowNav('close')}><p href="#">Resume</p></li>           
        </ul>
        </div> 
        <div className="nav-container-desktop">
        <ul className="nav-links-desktop">            
            <li><p onClick={()=>aboutMe.current.scrollIntoView({behavior: "smooth"})}>About</p></li>                        
            <li><p onClick={()=>projects.current.scrollIntoView({behavior: "smooth"})}>Projects</p></li>
            <li><p href="#">Contact</p></li> 
            <li><p href="#">Resume</p></li>           
        </ul>
        </div>       
          <div className="burger" ref={burger} onClick={()=>navControl()}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
