import React, { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import AOS, { init } from "aos";
import "aos/dist/aos.css";
import Email from "./Email";
interface sectionid {
  id: string;
}
const Contactme: React.FC<sectionid> = ({ id }) => {
  useEffect(() => {
    AOS.init({
      duration: 650,
      once: false,
    });
  });
  return (
    <div id={id} className="container mx-auto mt-[20px] " data-aos="fade-up">
      <h2 className="text-[24px] font-medium  text-center">
        Contact<span className="text-[#ff004f]">Me</span>
      </h2>
      <div className="flex flex-wrap gap-3 md:justify-between  px-3 md:px-0 my-[10px] md:my-[20px]">
        <div className="w-full md:basis-[45%] md:p-3">
          <div className="flex gap-2 items-center my-2">
            <AiOutlineMail className="text-[#ff004f] w-[33px] h-[50px]" />
            <h2 className=" font-medium text-base laeding-[30px]">
              Shambhuchu21@gmail.com
            </h2>
          </div>
          <div className="flex gap-2 items-center my-2">
            <MdLocationPin className="text-[#ff004f] w-[33px] h-[50px]" />
            <h2 className=" font-medium text-base laeding-[30px]">
              Lalitpur, Sadobato
            </h2>
          </div>
          <div className="flex gap-2 items-center my-2">
            <BiSolidPhoneCall className="text-[#ff004f] w-[33px] h-[50px]" />
            <a
              href="tel:9811969388"
              target="_blank"
              className=" font-medium text-base laeding-[30px]"
            >
              9811969388
            </a>
          </div>
        </div>
        <div className="w-full md:basis-[45%] md:p-3">
          <Email />
        </div>
      </div>
    </div>
  );
};

export default Contactme;
