import React from "react";
import { useState, useEffect, useRef } from "react";


const Navbar = ({aboutMe, projects, contacts}) => {

  const [showNav, setShowNav] = useState(false);
  const burger = useRef(null)
  const navLink = useRef(null)

  const handleClickOutside = (e) => {
         if (!burger.current.contains(e.target) && showNav !== false) {     
          if (!navLink.current.contains(e.target)) {      
      setShowNav(false);      
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
       <div className={`nav-container-mobile ${showNav ? 'open' : 'close'}`}  ref={navLink}>
       <ul className="nav-links-mobile">            
            <li onClick={()=>setShowNav(!showNav)}><p onClick={()=>aboutMe.current.scrollIntoView({behavior: "smooth"})}>About</p></li>                        
            <li onClick={()=>setShowNav(!showNav)}><p onClick={()=>projects.current.scrollIntoView({behavior: "smooth"})}>Projects</p></li>
            <li onClick={()=>setShowNav(!showNav)}><p href="#">Contact</p></li> 
            <li onClick={()=>setShowNav(!showNav)}><p href="#">Resume</p></li>           
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
          <div className="burger" ref={burger} onClick={()=>setShowNav(!showNav)}>
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
