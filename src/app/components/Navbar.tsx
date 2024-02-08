"use client";
import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useTheme } from "next-themes";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import Drawers from "./Drawers";
interface navtype {
  linkname: string;
  linkhref: string;
}
const navlink = [
  {
    linkname: "About",
    linkhref: "section2",
  },
  {
    linkname: "Myskill",
    linkhref: "section3",
  },
  {
    linkname: "Myproject",
    linkhref: "section4",
  },
  {
    linkname: "Contact",
    linkhref: "section5",
  },
];
const Navbar = () => {
  const [scroll, setScroll] = useState<Boolean>(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScroll(isScrolled);
    };
    //Attach the event Listener
    window.addEventListener("scroll", handleScroll);
    //clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={` w-full py-4  sticky top-0 z-50 ${scroll ? "nav" : ""}
        
       font-normal text-base  leading-7`}
    >
      <div className="md:hidden  px-[10px] flex justify-between items-center">
        <Drawers navlink={navlink} />
        <div>
          {theme === "dark" ? (
            <BsSun
              size={25}
              cursor="pointer"
              onClick={() => setTheme("light")}
            />
          ) : (
            <FiMoon
              size={25}
              cursor="pointer"
              onClick={() => setTheme("dark")}
            />
          )}
        </div>
      </div>
      <div className="container mx-auto hidden md:flex justify-between py-3">
        <div>
          {theme === "dark" ? (
            <BsSun
              size={25}
              cursor="pointer"
              onClick={() => setTheme("light")}
            />
          ) : (
            <FiMoon
              size={25}
              cursor="pointer"
              onClick={() => setTheme("dark")}
            />
          )}
        </div>
        <div className="flex justify-between basis-[50%] ">
          {navlink.map((val: navtype, index: number) => {
            return (
              <div className="relative " key={index}>
                <div className="navlink">
                  <Link
                    to={val.linkhref}
                    className=""
                    smooth={true}
                    duration={500}
                  >
                    {val.linkname}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
