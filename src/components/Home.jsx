import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8  flex flex-col justify-center h-full">
        <p className="font-sans text-lg text-pink-600 capitalize ">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]  ">
          Naga Kumar
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#bac0d3]/80 my-4">
          I'm a{" "}
          <span className="underline decoration-pink-600/50">
            Full Stack Developer
          </span>
          .
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] leading-6">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="flex items-center px-6 py-3 my-2 text-white border-2 group hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="duration-300 group-hover:rotate-90">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
