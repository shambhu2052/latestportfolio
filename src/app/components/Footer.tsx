import React from "react";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const icons = [
  {
    iconsname: <FaFacebook className="w-[25px] h-[25px] text-white" />,
    href: "https://www.facebook.com/",
  },
  {
    iconsname: <FaLinkedinIn className="w-[25px] h-[25px] text-white" />,
    href: "https://www.linkedin.com/feed/",
  },
  {
    iconsname: <FaTwitter className="w-[25px] h-[25px] text-white" />,
    href: "https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D",
  },
];
interface sectionid {
  id: string;
}
const Footer: React.FC<sectionid> = () => {
  return (
    <div className="container mx-auto py-2 md:py-4 px-3 md:px-0 flex flex-wrap gap-3 md:justify-between items-center">
      <div className="w-full md:basis-[45%]">
        <h2 className=" font-medium text-base laeding-[30px]">
          Shambhuchu21@gmail.com
        </h2>
      </div>
      <div className="w-full md:basis-[45%] flex gap-2 justify-start md:justify-end">
        {icons.map((val: any, index: number) => {
          return (
            <div
              className=" bg-[#ff004f] flex items-center justify-center rounded-full w-[40px] h-[40px] border-[1px] border-solid border-white"
              key={index}
            >
              <a href={val.href} target="_blank">
                {" "}
                {val.iconsname}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
