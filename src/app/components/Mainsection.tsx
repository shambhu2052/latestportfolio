import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import "aos/dist/aos.css";
interface sectionid {
  id: string;
}
const Mainsection: React.FC<sectionid> = ({ id }) => {
  return (
    <div id={id}>
      <div className=" container mx-auto px-3 py-3 md:px-0 md:py-0 md:h-[60vh]">
        <div className=" font-roboto">
          <div className="text-[30px]  mt-[10%] font-medium ">
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
          </div>
          <h3 className="font-bold text-[44px]  my-[20px]">
            Hi I am Shambhu <span className="text-[#ff004f]">Chaudhary</span>
          </h3>
          <a
            href="/../Shambhu's Resume.pdf"
            download="Shambhu's Resume.pdf"
            className="bg-[#ff004f] transition-transform transform duration-300 hover:translate-x-[20px]  hover:text-white text-base font-normal rounded-md border-2 border-solid border-white px-4 py-2"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mainsection;
