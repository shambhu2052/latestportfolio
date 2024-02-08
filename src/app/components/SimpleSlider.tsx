"use client";
import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface myskilltype {
  img: string;
  skillname: string;
}
const myskill = [
  {
    img: "/../assets/htmlimage.png",
    skillname: "HTML",
  },
  {
    img: "/../assets/cssimage.png",
    skillname: "CSS",
  },
  {
    img: "/../assets/tailwindimage.png",
    skillname: "Tailwind",
  },
  {
    img: "/../assets/jsimage.png",
    skillname: "Javascript",
  },
  {
    img: "/../assets/typescriptimage.png",
    skillname: "Typescript",
  },
  {
    img: "/../assets/reactimage.png",
    skillname: "React Js",
  },
  {
    img: "/../assets/nextjsimage.png",
    skillname: "Next Js",
  },
];
export default class SimpleSlider extends Component {
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
      <div className=" mt-[50px]">
        <Slider {...settings}>
          {myskill.map((val: myskilltype, index: number) => {
            return (
              <div className="" key={index}>
                <div className="overflow-hidden rounded-md w-[160px] md:w-[205px] h-[130px] cursor-pointer">
                  <Image
                    src={val.img}
                    alt="image of skills"
                    width={205}
                    height={130}
                    className="w-[205px] h-[130px] hover:scale-110 duration-150 "
                  />
                </div>
                <h4 className=" font-normal font-roboto text-base text-center mt-[10px]">
                  {val.skillname}
                </h4>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
