import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-black w-screen h-full pb-10 lg:pb-32 relative pt-10">
      <div className="w-[80%] mx-auto space-y-5 flex flex-col items-center lg:items-start">
        <div className="flex items-center space-x-5 w-full text-center justify-center lg:justify-start">
          <div className="w-[40%] lg:w-[8%] h-1 bg-black rounded-md" />
          <p className="text-white font-bold text-2xl">Services</p>
          <div className="w-[40%] lg:hidden h-1 bg-black rounded-md" />
        </div>
        <p className="text-white text-sm font-semibold">
          Provides Our Best Service
        </p>

        <div className="flex flex-wrap justify-center gap-5 w-full">
          <Cards
            title="Clinical Pathology"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            image="services-1.png"
          />
          <Cards
            title="Clinical Pathology"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            image="services-2.png"
          />
          <Cards
            title="Clinical Pathology"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            image="services-3.png"
          />
          <Cards
            title="Clinical Pathology"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            image="services-3.png"
          />
          <Cards
            title="Clinical Pathology"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            image="services-4.png"
          />
          <Cards
            title="Clinical Pathology"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            image="services-4.png"
          />
          <Cards
            title="Clinical Pathology"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            image="services-4.png"
          />
          <Cards
            title="Clinical Pathology"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            image="services-4.png"
          />
        </div>
      </div>

      <Image
        alt=""
        src={require("../../assets/images/doctors.png")}
        className="opacity-20 h-[50%] object-cover hidden lg:inline-block object-top absolute bottom-0 right-0"
      />
    </div>
  );
};

export default Services;

const Cards = ({ title, description, image }) => {
  return (
    <div className="md:cursor-pointer bg-[#313131] group shadow-lg px-5 py-10 w-[16rem] z-10 space-y-5 rounded-sm">
      <div>
        <Image alt="" src={require(`../../assets/images/${image}`)} />
      </div>
      <p className="text-white font-bold text-xl">{title}</p>
      <div className="h-1 bg-primary w-full rounded-full" />
      <p className="group-hover:-translate-y-32 group-hover:invisible duration-200 ease-out group-hover:text-[#313131] text-center font-bold text-white">
        See More
      </p>
      <p className=" text-[#313131] translate-y-64 invisible group-hover:visible group-hover:text-white group-hover:translate-y-0 duration-200 ease-out  text-sm">
        {description}
      </p>
    </div>
  );
};
