import React from "react";
import Projects from "./Components/Project";


export default class App2 extends React.Component{

    render(){
        
        const Project =[

            {
                id :1,
                img :'./assets/car-rental-website.png',
                title:'Car-Rental-Website',
                info :"This website is made for Car rental service.In this we can used the React tecnology that why it is prety good fast ",
                link:'https://github.com/AK-Anyaa/Car-rental-project',
                btn: 'GitHub'
            },
            
            {
                id :2,
                img :'./assets/weightlosscover.jpg',
                title:'Weight Loss',
                info :"Unlock a healthier you with our weight loss platform, designed using HTML and CSS for a seamless, user-friendly experience. Enjoy easy navigation, tailored meal plans, and workout routines that guide you every step of the way to achieving your fitness goals.",
                link:'https://github.com/AK-Anyaa/Car-rental-project',
                btn: 'GitHub'
            },

            {
                id :3,
                img :'./assets/security.png',
                title:'Security',
                info :"Providing Seattle With Superior Security Solutions. This webpage developed using the BOOTSTRAP and CSS it's responcive to the all Divices.In it we can shows all the security services  ",
                link:'https://github.com/AK-Anyaa/Car-rental-project',
                btn: 'GitHub'

            }
        ]
        
        
        
        
        return(


            <>

            <div className="container-fluid" style={{height:'auto',backgroundColor:'#000000'}}>
                <div className="row">
                        
            
            {


                Project.map((val, index, array) => {

            return (
                <div className="col-md-4 mt-4">
                    <Projects

                        img={val.img}
                        title={val.title}
                        info={val.info}
                        link={val.link}
                        btn={val.btn}
                       
                    />
                </div>
            
                
                )
            })


            }
            
                </div>
            </div>              
            </>

            
        )
    }
}

