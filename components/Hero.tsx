import React from "react";
import { Button } from "@mui/material";

const Hero = () => {
  return (
    <div className="h-[89vh] flex items-center ">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-6">
          Effortlessly Capture Any Color
        </h1>
        <p className="text-lg mb-8">
          Our intuitive color picker lets you instantly identify and save any
          shade from your screen, web pages, or images with just a click.
        </p>

        <div className="flex items-center space-x-3 mt-16">
          <Button variant="contained" color="inherit">
            Purchase UI Kit
          </Button>
          <Button variant="outlined" color="inherit">
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
