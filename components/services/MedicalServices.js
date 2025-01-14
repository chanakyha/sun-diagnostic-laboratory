import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const MedicalServices = ({ viewMoreRef }) => {
  const router = useRouter();
  return (
    <div
      ref={viewMoreRef}
      className="w-screen min-h-screen bg-gradient-to-b from-primary to-black flex justify-center flex-col"
    >
      <div className="flex flex-col-reverse my-10 lg:flex-row justify-center items-center lg:items-start w-2/3 mx-auto text-white font-ubuntu">
        <div className="flex flex-col text-center lg:text-left justify-center items-center lg:items-start space-y-5">
          <h1 className="text-2xl mt-5 lg:text-5xl text-shadow-sm font-bold">
            Affordable Diagnostic <br />
            Services{" "}
          </h1>
          <p className="lg:w-2/3 text-sm">
            You shouldn't have to compromise on your health or the quality of
            your care. Our diagnostic services are affordable and can help you
            get back on track with your treatment plan.
          </p>
          <button
            onClick={() => router.push("/packages")}
            className="text-xl md:hover:border-black font-bold border rounded-sm md:active:scale-90 md:hover:scale-105 md:hover:text-black md:hover:bg-primary duration-150 ease-out border-white px-4 py-3"
          >
            Book Appointment
          </button>
        </div>
        <Image
          alt=""
          className="w-96 h-96"
          src={require("../../assets/images/hero-img-2.png")}
        />
      </div>
    </div>
  );
};

export default MedicalServices;
