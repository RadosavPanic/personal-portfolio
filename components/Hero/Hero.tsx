import React from "react";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        className="hidden lg:block rotate-180 absolute md:top-[-340px] top-[-700px] left-0 z-[1] w-full h-full object-cover "
        autoPlay
        muted
        loop
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
