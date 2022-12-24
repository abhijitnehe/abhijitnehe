import "./footerStyles.css"
import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaMobile, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome  size={30} style= {{ color:"#fff", marginRight: "2rem" }}/>
                    <div>
                        <p>Adarsh Nagar Ghulewadi.</p>
                        <p>Maharashtra, India</p>
                    </div>
                    <div className="phone">
                        <h4>
                        <FaMobile size={30} style = {{ color: "#fff", marginRight: "2rem"}}/>
                        +91 8793955673
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                        <FaMailBulk size={30} style = {{color: "#fff", marginRight: "2rem"}}/>
                        abhijitnehe38@gmail.com
                        </h4>
                    </div>
                </div>
            </div>
            <div className="right">
                <h4>
                    Follow For More
                </h4>
                <div className="social">
                <FaFacebook size={30} style = {{color: "#fff", marginRight: "2rem"}}/>
                <FaLinkedin size={30} style = {{color: "#fff", marginRight: "2rem"}}/>
                <FaTwitter size={30} style = {{color: "#fff", marginRight: "2rem"}}/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer