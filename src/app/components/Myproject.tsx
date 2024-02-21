import React, { useEffect } from "react";
import SimpleSlider2 from "./SimpleSlider2";
import AOS, { init } from "aos";
import "aos/dist/aos.css";
interface sectionid {
  id: string;
}
const Myproject: React.FC<sectionid> = ({ id }) => {
  useEffect(() => {
    AOS.init({
      duration: 650,
      once: false,
    });
  });
  return (
    <div
      id={id}
      className="mt-[20px] container mx-auto px-3 md:px-0 pt-[52px] md:pt-[74px]"
    >
      <h2 className="text-[24px] font-medium  text-center pb-6">
        My<span className="text-[#ff004f]">Project</span>
      </h2>
      <SimpleSlider2 />
    </div>
  );
};

export default Myproject;
