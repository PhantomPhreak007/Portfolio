import React from "react";
import Lanyard from "./assets/Components/Lanyard/Lanyard.jsx";
import RotatingText from "./assets/TextAnimations/RotatingText/RotatingText.jsx";
import DotGrid from "./assets/Backgrounds/DotGrid/DotGrid.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";

const Page = () => {
  return (
    <div className="relative">
      <div
        className="z-0 inset-0"
        style={{ width: "100%", height: "600px", position: "absolute" }}
      >
        <DotGrid
          dotSize={2}
          gap={15}
          baseColor="#5227FF"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center w-full min-h-[350px] md:min-h-[400px] lg:min-h-[500px] px-4 md:px-12 py-8 gap-6 md:gap-0">
        <div className="flex flex-col w-full md:w-1/2 items-center md:items-end">
          <div className="text-white flex px-2 text-3xl sm:text-4xl md:text-5xl font-mono font-extrabold justify-center md:justify-end items-center w-full">
            <h1>Hello</h1>
          </div>
          <RotatingText
            texts={["React", "Bits", "Is", "Cool!"]}
            mainClassName="relative w-[120px] sm:w-[150px] z-10 px-2 sm:px-2 md:px-3 bg-[#5227FF] text-white text-xl sm:text-2xl md:text-3xl font-mono font-extrabold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg mt-2"
            staggerFrom={"last"}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
        <div className="flex w-full md:w-1/2 justify-center items-center">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 xl:w-full xl:h-full max-w-xs sm:max-w-sm md:max-w-md xl:max-w-full">
            <Lanyard />
          </div>
        </div>
      </div>
      <Projects />
      <Skills/>
    </div>
  );
};

export default Page;