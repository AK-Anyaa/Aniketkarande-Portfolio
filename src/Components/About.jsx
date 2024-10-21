import React from "react";

export default function About(){
    return (
        
        <div className="container-fluid " style={{height:'90vh',background:'#000000'}}>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h2 className='mt-5 text-success fw-bold'style={{fontSize:'70px'}}>Introduction</h2>

                    <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px] text-white'>👨‍💻 Hi, I'm Aniket Karande, a 2024 graduate🎓 with a passion for crafting robust frontend systems and captivating mobile applications.As a seasoned Software developer I specialize in both MEAN and MERN stacks🚀.
                        <br /><br />

                        One of my strengths is my love for learning new things. I’m always curious and eager to pick up new skills. I’m also hardworking and try to stay positive, especially when I’m listening to music, which I really enjoy.
                        </p>

                    <br />

                    <button className='btn btn-outline-danger px-3 text-center fw -bold'><a style={{textDecoration:'none', color:'white'}} href="./assets/resume.pdf" target="_blank">View Resume</a></button>
                </div> 
            </div>
        </div>
       
  );
}
