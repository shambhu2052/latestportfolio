"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { motion } from "framer-motion";
interface myprojecttype {
  ahref: string;
  img: string;
  projectname: string;
}
const myproject = [
  {
    ahref: "https://unsplash-image-search-app-six.vercel.app/",
    img: "/../assets/imagesearchapp.png",
    projectname: " Image Search App",
  },
  {
    ahref: "https://dms-nepal.vercel.app/",
    img: "/../assets/dmsnepal.png",
    projectname: "DMS Nepal",
  },
  {
    ahref: "https://tourand-travel.vercel.app/",
    img: "/../assets/tourandtravel.png",
    projectname: "Booking Own",
  },
  {
    ahref: "https://mbbs.vercel.app/",
    img: "/../assets/mbbs.png",
    projectname: "Mbbs Orbits",
  },
  {
    ahref: "https://shambhumoviesserchapp.netlify.app/",
    img: "/../assets/moviessearchapp.png",
    projectname: "Movies Search App",
  },
  {
    ahref: "https://noah-webdesign-3be58d.netlify.app/",
    img: "/../assets/noah.png",
    projectname: "Noah Web Desing",
  },
  {
    ahref: "https://weather-app-git-main-shambhuchu21-gmailcom.vercel.app/",
    img: "/../assets/weatherapp.png",
    projectname: "Weather App",
  },
];
export default class SimpleSlider2 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="">
        <Slider {...settings}>
          {myproject.map((val: myprojecttype, index: number) => {
            return (
              <motion.div
                whileHover={{
                  y: -15,
                  transition: { duration: 1 },
                }}
                className="my-[50px]"
                key={index}
              >
                <div className="flex flex-col gap-[10px] items-center">
                  <div className="overflow-hidden rounded-md w-[160px] md:w-[205px] h-[130px] cursor-pointer">
                    <a href={val.ahref} target="_blank">
                      <Image
                        src={val.img}
                        alt="image of myproject"
                        width={205}
                        height={130}
                        className="w-[205px] h-[130px] hover:scale-110 duration-150 "
                      />
                    </a>
                  </div>
                  <h4 className=" font-normal font-roboto text-base  ">
                    {val.projectname}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
