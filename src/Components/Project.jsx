import React from "react";



export default function Projects(props){

   const {img, title, info,link, btn}=props

        console.log(link);
        console.log(title);
        return(


            <>
                
                            <div className="card m-3 text-white" style={{backgroundColor:'#111827'}}>
                                <img src={img} className="card-img-top img-fliud" style={{height:'200px'}} alt=""/>
                    
                                    <div className="card-body">
                                    <h5 className="card-title"><b>{title}</b></h5>
                                    <p className="card-text">{info}</p>
                                    <a href={link} target="_blank" className="btn btn-outline-success px-3 text-center fw-bold">{btn}</a>
                                </div>
                            </div>
            
                        
            </>
        )
    }
