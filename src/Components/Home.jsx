import React from "react";
import { useState, useRef, useEffect } from "react";
import ParticleEffect from "./ParticleEffect";

export default function Home() {
  let name = "Aniket..";
  const ref = useRef(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        ref.current++;
        setText(() => text + name[ref.current - 1]);
      }
    }, 600);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <>
      <center>
        <div
          className='container-fliud'
          style={{ height: "90vh", background: "#000000" }}>
          <div className='row m-0'>
            <div className='col-md-12'>
              <h1
                className='text-white fw-bold'
                style={{
                  fontSize: "100px",
                  fontFamily: "",
                  marginTop: "125px",
                }}>
                Hi, I'm <span className='text-warning fw-bold'>{text}</span>
              </h1>
              <h4 className='text-white'>
                I love to learn and build scalable and optimized Frontend
                systems.
              </h4>
            </div>
          </div>
        </div>
      </center>

      <ParticleEffect />
    </>
  );
}

// Rafce
