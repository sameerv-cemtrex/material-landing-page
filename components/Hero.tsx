import React from "react";
import { Button } from "@mui/material";

const Hero = () => {
  return (
    <div className="h-[89vh] flex items-center ">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-6">
          Unleash Your Creativity with Effortless Color Exploration
        </h1>
        <p className="text-lg mb-8">
          Discover a world of vibrant possibilities with our cutting-edge color
          picker. Effortlessly capture and save any shade from your screen, web
          pages, or images with just a click. Unlock a seamless workflow and
          elevate your design projects to new heights with our intuitive and
          powerful tool.
        </p>

        <div className="flex items-center space-x-3">
          <Button variant="contained" color="primary">
            Purchase UI Kit
          </Button>
          <Button variant="outlined" color="primary">
            Learn more
          </Button>
        </div>
        {/* Add a call-to-action button or form here */}
      </div>
      <img
        src="/images/color-picker-hero.png"
        alt="Color Picker Hero"
        className="absolute -z-10 top-0 right-0 h-screen"
      />
    </div>
  );
};

export default Hero;
