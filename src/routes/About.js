import React from 'react'
import Navbar from '../Component/navbar'
import Footer from '../Component/footer'
import Heroimg2 from '../Component/Heroimg2'
import About1 from '../Component/about'

const About = () => {
  return (
    <>
    <Navbar/>
    <Heroimg2 heading="About" text="Im a friendly Front-End Developer"/>
    <About1/>
    <Footer/>
    </>
  )
}

export default About