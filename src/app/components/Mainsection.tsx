import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";
interface sectionid {
  id: string;
}

const Mainsection: React.FC<sectionid> = ({ id }) => {
  useEffect(() => {
    AOS.init({
      duration: 650,
      once: false,
    });
  });
  return (
    <div id={id}>
      <div
        className=" container mx-auto px-3 py-3 md:px-0 md:py-0 md:h-[60vh]"
        data-aos=""
      >
        <div className=" font-roboto">
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: -100 }}
            transition={{ duration: 3, type: "spring", stiffness: 100 }}
            className="text-[30px]  mt-[10%] font-medium "
          >
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "React js Developer",
                  "Next js Developer",
                  "Web Designer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>
          <motion.h3
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 3, type: "spring", stiffness: 100 }}
            className="font-bold text-[44px]  my-[20px]"
          >
            Hi I am Shambhu <span className="text-[#ff004f]">Chaudhary</span>
          </motion.h3>
          <motion.p
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 3, type: "spring", stiffness: 100 }}
            className="pt-2 pb-6 font-normal text-base max-w-[650px]"
          >
            I am a passionate frontend developer with expertise in React.js and
            Next.js. With a keen eye for design and a knack for problem-solving,
            I specialize in crafting user-friendly interfaces and building
            responsive web applications. My journey in web development has
            equipped me with a strong foundation in HTML, CSS, TailwindCSS,
            SASS, JavaScript, allowing me to create engaging digital
            experiences.
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.5, rotate: 10 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            href="/../Shambhu's Resume.pdf"
            download="Shambhu's Resume.pdf"
            className="bg-[#ff004f] transition-transform transform duration-300 hover:translate-x-[20px]  hover:text-white text-base font-normal rounded-md border-2 border-solid border-white px-4 py-2"
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Mainsection;
