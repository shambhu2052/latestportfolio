import React from "react";
import SimpleSlider2 from "./SimpleSlider2";
interface sectionid {
  id: string;
}
const Myproject: React.FC<sectionid> = ({ id }) => {
  return (
    <div
      id={id}
      className="mt-[20px] container mx-auto px-3 md:px-0 pt-[52px] md:pt-[74px]"
    >
      <h2 className="text-[24px] font-medium  text-center">
        My<span className="text-[#ff004f]">Project</span>
      </h2>
      <SimpleSlider2 />
    </div>
  );
};

export default Myproject;
