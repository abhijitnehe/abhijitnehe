import React from 'react'
import './HeroStyle.css'
import { Link } from 'react-router-dom';
import  Abhi  from "../assets/1234.jpg";

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src= {Abhi} alt="IntroImg"></img>
        </div>
        <div className="content">
            <p>Hi I'M ABHIJIT NEHE</p>
            <h1>React Developer</h1>
       
        
            <Link to = "/project" className="btn">PRJECTS</Link>
            <Link to = "/contact" className="btn-light">CONTACT</Link>
            </div>
    </div>

  )
}

export default Hero