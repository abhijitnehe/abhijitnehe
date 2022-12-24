import React from 'react'
import Navbar from '../Component/navbar'
import Footer from '../Component/footer'
import Heroimg2 from '../Component/Heroimg2'
import Form from '../Component/contactForm'


const Contact = () => {
  return (
    <>
    <Navbar/>
    <Heroimg2 heading="Contact Me" text="Lets have a chat"/>
    <Form/>
    <Footer/>
    </>
  )
}

export default Contact