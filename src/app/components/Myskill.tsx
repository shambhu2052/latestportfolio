import React, { Component } from "react";
import SimpleSlider from "./SimpleSlider";
interface sectionid {
  id: string;
}
const Myskill: React.FC<sectionid> = ({ id }) => {
  return (
    <div
      className="container mx-auto my-5 px-3 md:px-0 pt-[52px] md:pt-[74px]"
      id={id}
    >
      <h2 className="text-[24px] font-medium  text-center">
        My<span className="text-[#ff004f]">Skill</span>
      </h2>
      <SimpleSlider />
    </div>
  );
};

export default Myskill;
