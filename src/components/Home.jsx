import React, { useRef } from 'react';
import {animate, motion} from "framer-motion";
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/me.jpeg"

const Home = () => {


    const clientCount= useRef(null);


    const animationClientCount= () =>{
        animate(0,9696575056,{
            duration:1,
            onUpdate:(v)=>clientCount.current.textContent = v.toFixed(),
        })
    }



    const animation = {
     h1: { initial:{
            x:"-100%",
            opacity:0,
        },
        whileInView:{
            x:0,
            opacity:1,
        }
    },
    button:{ initial:{
        x:"-100%",
        opacity:0,
    },
    whileInView:{
        x:0,
        opacity:1,
    }

    }
    }

  return (
    <div id="home">
        <section>
            <div>
                <motion.h1 {...animation.h1}>
                    Hi, I am <br/> Sourabh Singh
                </motion.h1>
                <Typewriter 
                options={{
                    strings: ["A Developer", "A Coder", "A Creator"],
                    autoStart:true,
                    loop:true,
                    cursor:"",
                    wrapperClassName:"typewriterpara"
                }} 
                />
                        <div>
            <a href="mailto:ss2955406@gmail.com">Hire Me</a>
            <a href="#work">Projects <BsArrowUpRight /></a>
          </div>
          <article>
                    <p>
                        <motion.span whileInView={animationClientCount} ref={clientCount}></motion.span>
                    </p>
                    <span>Phone Number</span>
                </article>
            <aside>
                <article>
                    <p>
                        <span>ss2955406@gmail.com</span>
                    </p>
                    <span>Email Me</span>
                </article>

                
            </aside>
            </div>
        </section>
        <section>
            <img src={me} alt="Sourabh"/>
            <BsChevronDown/>
        </section>

        
    </div>
  )
}

export default Home;