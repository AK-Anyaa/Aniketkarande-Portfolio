import React from "react";
import { FaGithub, FaInstagram, FaInstagramSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";



const Footer=()=>{

    return(

        <>
        <div className="container-fluid " style={{backgroundColor:'#1F2937',zIndex:1,position:'relative'}}>
            <div className="row adjust">
                <div className="col-md-12 text-white p-4">
                    <center>
                    
                    <a  className="mx-4" style={{color:'pink'}}
                        href="https://www.instagram.com/_._aanya_._14/"
                        target="_blank">
                        <FaInstagram className="instagram text-white" style={{fontSize:'20px'}} /></a>


                    <a  className="mx-4"
                        href="https://wa.link/7t5pmn"
                        target="_blank">
                        <FaWhatsapp className="instagram text-white" style={{fontSize:'20px'}} /></a>

                    

                    <a  className="mx-4"
                        href="mailto:aniketk1179@gmail.com"
                        target="_blank">
                        <FiMail className="instagram text-white" style={{fontSize:'20px'}} /></a>

                    <a  className="mx-4"
                        href="https://github.com/AK-Anyaa"
                        target="_blank">
                        <FaGithub className="instagram text-white" style={{fontSize:'20px'}} /></a>
                        
                    {/* <a  className="mx-4"
                        href="https://www.linkedin.com/in/aniket-karande-012ba72a6/"
                        target="_blank">
                        <FaLinkedin className="instagram text-white" style={{fontSize:'20px'}} /></a> */}
                    
                </center>
                   
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Footer;