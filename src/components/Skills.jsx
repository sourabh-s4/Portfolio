import React from "react";
import { motion } from "framer-motion";



const Skills = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },
    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>SKILLS</h2>
      <section>
        <motion.div
          className="serviceBox1"
          variants={animations}
          initial="one"
          animate="whileInView"
        >
        
          <span>HTML</span>
        </motion.div>
        <motion.div
          className="serviceBox2"
          variants={animations}
          initial="twoAndThree"
          animate="whileInView"
        >
          
          <span>CSS</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          variants={animations}
          initial="twoAndThree"
          animate="whileInView"
          transition={{
            delay: 0.2,
          }}
        >
        
          <span>JavaScript</span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          variants={animations}
          initial="four"
          animate="whileInView"
        >
          
          <span>Chakra-Ui</span>
        </motion.div>

        <motion.div
          className="serviceBox1"
          variants={animations}
          initial="one"
          animate="whileInView"
        >
        
          <span>React</span>
        </motion.div>
        <motion.div
          className="serviceBox2"
          variants={animations}
          initial="twoAndThree"
          animate="whileInView"
        >
          
          <span>Redux Toolkit</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          variants={animations}
          initial="twoAndThree"
          animate="whileInView"
          transition={{
            delay: 0.2,
          }}
        >
        
          <span>MongoDB</span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          variants={animations}
          initial="four"
          animate="whileInView"
        >
          
          <span>Express</span>
        </motion.div>
        <motion.div
          className="serviceBox2"
          variants={animations}
          initial="twoAndThree"
          animate="whileInView"
        >
          
          <span>Nodejs</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          variants={animations}
          initial="twoAndThree"
          animate="whileInView"
          transition={{
            delay: 0.2,
          }}
        >
        
          <span>C++</span>
        </motion.div>

      </section>
    </div>
  );
};

export default Skills;
