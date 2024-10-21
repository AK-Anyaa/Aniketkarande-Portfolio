import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


import './contact.css'

export default function Contact(){


        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
            .sendForm('service_3l4u111', 'template_d169z8f', form.current, {
              publicKey: '6IccD8XQRPx7I8W3q',
            })
            .then(
              () => {
                alert('SUCCESS!');
              },
              (error) => {
                alert('FAILED...', error.text);
              },
            );
        };

    return(



        <>
        
            <div className="container-fliuid text-white" style={{height:'85vh',backgroundColor:'#000000'}}>
                <div className="row">
                    <div className="col-md-2">
                        
                    </div>
                    

                            <section>

                            <form ref={form} onSubmit={sendEmail}>

                                
                                    <center>
                                        <img src="./assets/contact.jpeg" className="img-fliud rounded mt-3" alt="" />
                                    </center> 
                                
                                
                                    <label className='mt-5'>Name</label>
                                    <input className='text-light rounded' type="text" name="User_name" />
    
                                    <label>Email</label>
                                    <input className='text-light rounded' type="email" name="User_email" />
    
                                    <label>Message</label>
                                    <textarea className='text-light rounded' name="message" />
                                
                                    <input className='btn btn-outline-primary fw-bold' type="submit" value="Send" />
                            </form>
                                
                            </section>

                    </div>
                </div>
            

        
            
        </>
    )
}