import React from "react";

const InfoSection4 = () => {
  return (
    <div className="md:flex items-center py-8 mt-10 info-container-3">
      <img
        alt="info section 2"
        src="/images/info-section4.png"
        className="md:w-1/2 px-12 py-8 md:py-0 info3"
      />

      <div className="md:w-1/2 px-8 text-center md:text-start">
        <h3 className="text-2xl font-semibold">Unlock the Power of Color</h3>
        <p className="mt-4 md:w-3/4    ">
          Our cutting-edge color picker tool puts a world of possibilities at
          your fingertips. Effortlessly explore and experiment with an infinite
          palette of colors, unlocking new levels of creativity and
          self-expression. Discover the perfect hues to bring your projects to
          life with unparalleled vibrancy and impact.
        </p>
      </div>
    </div>
  );
};

export default InfoSection4;
