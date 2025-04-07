import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { AnimatedSection } from ".";

const Overview = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className='pre-h1'>Introduction</h1>
        <h1>Overview</h1>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-primary text-2xl leading-[30px]'
      >
        <p>
          Throughout my studies I have worked on debugging and problem solving, refactoring,
          testing, pair programming, using documentation, and learning the grammar of HTML,
          CSS, and JS.
        </p>

        <p>
          I particularly enjoy the practices of Test-Driven Development and abstraction, and
          always strive to follow the SOLID principles of Agile code.
        </p>

        <p>
          One of my favorite things about code is the room for growth, and programmers whose code
          I look up to include Steve Freeman and Nat Pryce, Luciano Ramalho, and of course Uncle Bob.
        </p>
      </motion.div>
    </>
  );
};

export default AnimatedSection(Overview, "overview");
