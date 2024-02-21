import React, { useEffect } from "react";
import { MdDateRange } from "react-icons/md";
import "aos/dist/aos.css";
import AOS from "aos";
import { easeIn } from "framer-motion";
interface sectionid {
  id: string;
}
const About: React.FC<sectionid> = ({ id }) => {
  useEffect(() => {
    AOS.init({
      duration: 650,
      once: false,
    });
  });
  return (
    <div
      id={id}
      className="my-4 container mx-auto px-3 md:px-0 pt-[52px] md:pt-[74px]"
    >
      <h2 className="text-[24px] font-medium  text-center">
        About <span className="text-[#ff004f]">Me</span>
        <div className="flex flex-wrap gap-4 md:justify-between my-3">
          <div className="w-full md:basis-[45%] ">
            <h4 className="text-left md:text-center  font-normal text-base py-2">
              Education
            </h4>
            <div className="relative">
              <div className="border-[1px] border-solid  p-3 w-full education rounded-md">
                <div className="flex gap-3 items-center">
                  <MdDateRange className="w-[30px] h-[30px] " />
                  <h2 className="text-[#ff004f] text-base font-normal ">
                    2017-2022
                  </h2>
                </div>
                <h3 className="text-left font-bold text-base leading-[22px]  py-2">
                  Bachelor Degree-Pokhara University
                </h3>
                <p className="text-left font-normal text-base leading-[20px] py-3">
                  I have completed Bachelor of Computer Application from lumbini
                  engineering college affilicated to Pokhara University. I
                  obtained 3.20 SGPA.In BCA Degree i have learned database
                  management system,C programming, Object oriented C++,java,php
                  ,web designing, Android Mobile development and Visual
                  programming
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:basis-[45%]">
            <h4 className="text-left md:text-center  font-normal text-base py-2">
              Experiance
            </h4>
            <div className="relative">
              <div className="border-[1px] border-solid  p-3 w-full rounded-md education">
                <div className="flex gap-3 items-center">
                  <MdDateRange className="w-[30px] h-[30px] " />
                  <h2 className="text-[#ff004f] text-base font-normal ">
                    2022-Present
                  </h2>
                </div>
                <h3 className="text-left font-bold text-base leading-[22px] py-2">
                  Supreme IT Solution Pvt Ltd.
                </h3>
                <p className="text-left font-normal text-base leading-[20px] py-3">
                  I have assisted the development team in designing and
                  implementing website and web Application using
                  HTML,CSS,Tailwind css ,Next Js and React.I have worked on
                  project to enhance the performance of a website and web
                  application and implemented responsive for mobile user.
                </p>
              </div>
            </div>
          </div>
        </div>
      </h2>
    </div>
  );
};

export default About;
