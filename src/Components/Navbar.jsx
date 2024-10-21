import React from "react";
import { NavLink } from "react-router-dom";


function Nav(){

    return(

        <>
        
            <nav className="navbar navbar-expand-lg p-3 " style={{backgroundColor:'#1F2937',zIndex:1}}>
                <div className="container-fluid text-white">
                    
                    
                    <NavLink to='/' className="navbar-brand text-white fw-bold mx-3" style={{fontFamily:'revert'}}><b>ANIKET KARANDE</b></NavLink>

                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav  m-auto">
                                <li className="nav-item" >
                                    <NavLink to="/" className="nav-link active text-white mx-5">Home</NavLink>
                                    
                                </li>
        
                                <li class="nav-item">
                                    <NavLink to="/about" className="nav-link text-white  mx-5">About</NavLink>
                                </li>

                                <li className="nav-item ">
                                    <NavLink to="/project" className="nav-link text-white  mx-5">Projects</NavLink>
                                </li>
                                
                                <li className="nav-item">
                                    <NavLink to="/Contact" className="nav-link text-white  mx-5">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                
                </nav>
        
        </>
    )}

export default Nav;