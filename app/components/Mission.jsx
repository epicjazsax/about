import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, textVariant } from "../utils/motion";
import { AnimatedSection } from ".";
import { IconCard } from ".";

import { domains } from "../data/domains";
import { languages } from "../data/languages";

const Mission = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className='pre-h1'>Focus</h1>
        <h1>Mission</h1>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-primary text-xl leading-[30px]'
      // max-w-3xl
      >
        <p>
          My mission is to write better code.
        </p>

        <p>
          Essential code attributes include:
        </p>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          <li>maintainable (readable, testable, and extensible)</li>
          <li>robust (well-tested, consistent, and efficient)</li>
          <li>secure (appropriately protected, permissioned, and authenticated)</li>
        </ul>
{/* 
        <p>
          Critical process attributes include:
        </p>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          <li>efficiency</li>
          <li>trainability</li>
          <li>predictability</li>
          <li>transparency</li>
          <li>repeatability</li>
          <li>scalability</li>
        </ul> */}

      </motion.div>
    </>
  );
};

export default AnimatedSection(Mission, "mission");
