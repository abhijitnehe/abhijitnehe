import './aboutStyle.css'
import { Link } from "react-router-dom";
import react1 from '../assets/react1.jpg'
import react2 from '../assets/react2.webp'

import React from 'react'

const About1 = () => {
  return (
    <>
    <div className='about'>
    <div className='left'>
        <h1 className='heading'>Who I AM?</h1>
        <p className='para'>I am a React Front-End Developer. I create
        responsive secure website for my client</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
    </div>

    <div className='right'>
        <div className='img-container'>
            <div className='img-stack top'>
                <img src={react2} className="img" alt="react1"></img>
            </div>
            <div className='img-stack bottom'>
                <img src={react1} className="img" alt="react2"></img>
            </div>
        </div>
    </div>
    </div>
   
    </>
  )
}

export default About1