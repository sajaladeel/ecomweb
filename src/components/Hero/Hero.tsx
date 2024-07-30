"use client";
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BiCycling } from 'react-icons/bi';
import BurgerImg1 from '/.public/images/burger1.png';
import BurgerImg2 from './public/images/burger2.jpg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Hero: React.FC = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="items"
      showDots={true}
    >
      {/* First hero slide */}
      <div className="w-[100%] h-[88vh] items-center justify-center flex-col bg-blue-950 clip_path">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          <div>
            <Image src="/images/burger1.png" alt="burger" width={400} height={300} />
          </div>
          <div>
            <h1 className="text-[40px] font-semibold text-yellow-400">
              Fillet Burger
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
              Best<br /> Burgers
            </h1>
            <p className="mt-[1rem] py-10 px-10 text-white text-opacity-70 text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus ducimus aut dicta! Harum, nesciunt sapiente.
              Quia exercitationem nam consectetur excepturi deserunt magnam incidunt tempora,
              iusto, aut facilis, at quod ipsam?
            </p>
            <button className="mt-[rem] px-8 py-3 text-[16px] bg-green-500 transition-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white">
              <span>
                <BiCycling className="w-[1.7rem] h-[1.7rem]" />
              </span>
              <span className="font-bold">Order Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Second slide */}
      <div className="w-[100%] h-[88vh] items-center justify-center flex-col bg-red-950 md:clip_path">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
          <div>
            <Image src="/images/burger2.jpg" alt="burger 2" width={400} height={300} />
          </div>
          <div>
            <h1 className="text-[40px] font-semibold text-yellow-400">
              Tasty Burger
            </h1>
            <h1 className="text-[90px] leading-[5rem] uppercase text-white font-bold">
              Top<br /> Burgers
            </h1>
            <p className="mt-[1rem] py-10 px-10 text-white text-opacity-70 text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus ducimus aut dicta! Harum, nesciunt sapiente.
              Quia exercitationem nam consectetur excepturi deserunt magnam incidunt tempora,
              iusto, aut facilis, at quod ipsam?
            </p>
            <button className="mt-[rem] px-8 py-3 text-[16px] bg-blue-500 transition-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white">
              <span>
                <BiCycling className="w-[1.7rem] h-[1.7rem]" />
              </span>
              <span className="font-bold">Order Now</span>
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
