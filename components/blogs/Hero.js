import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="hero-bg h-[30rem] w-screen hidden lg:block">
      <div className="relative h-full w-fit mx-auto">
        <Image
          src={require("../../assets/images/blogs-hero.png")}
          className="rounded-sm"
        />
        <h1 className="absolute top-20 text-shadow-sm left-20 text-7xl italic font-bold text-white">
          Blogs
        </h1>
      </div>
    </div>
  );
};

export default Hero;