import React from 'react'
import Navbar from '../Component/navbar'
import Footer from '../Component/footer'
import Heroimg2 from '../Component/Heroimg2'
import Work from '../Component/work'

const Project = () => {
  return (
    <>
    <Navbar/>
    <Heroimg2  heading="Projects" text="Some of my most recent works"/>
    <Work/>
    <Footer/>
    </>
  )
}

export default Project