import React from 'react'
import dev from '../assets/dev1.svg'


const Home = ({aboutMe}) => {
    return (
        <>        
        <div className="home-container">
        <div className="greetings">
        <h2>
        Hi, my name is <br className="name-space"/> <span className="name">Greg</span> <br/>I am a Web developer.
        </h2>        
        </div>
        <div className="dev-container">
        <img className="dev-img" src={dev} alt="dev"/>
        </div>
        <div className="btn-lm-container">
        <button className="btn-lm" onClick={()=>aboutMe.current.scrollIntoView({behavior: "smooth"})}>Learn More</button>
        </div>
        </div>
        </>
    )
}

export default Home
