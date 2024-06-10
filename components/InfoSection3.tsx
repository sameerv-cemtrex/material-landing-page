import React from "react";

const InfoSection3 = () => {
  return (
    <div className="md:flex items-center py-8 mt-10 info-container-2">
      <img
        alt="info section 2"
        src="/images/info-section3.png"
        className="md:w-1/2 px-12 py-8 md:py-0 info2"
      />

      <div className="md:w-1/2 px-8 text-center md:text-start">
        <h3 className="text-2xl font-semibold">
          Unleash Your Color Creativity
        </h3>
        <p className="mt-4 md:w-3/4    ">
          Explore an infinite palette of possibilities with our cutting-edge
          color picker tool. Effortlessly experiment with a vast spectrum of
          hues, shades, and tints to unlock your creative potential. Discover
          the perfect color combinations that resonate with your brand or
          project, and bring your vision to life with unparalleled ease and
          precision.
        </p>
      </div>
    </div>
  );
};

export default InfoSection3;
