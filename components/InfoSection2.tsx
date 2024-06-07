import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

const InfoSection2 = () => {
  return (
    <div className="flex items-center py-8 mt-10 info-container-1">
      <img
        alt="info section 2"
        src="/images/info-section-image2.png"
        className="w-1/2 px-12 info1"
      />

      <div className="w-1/2 px-8">
        <h3 className="text-2xl font-semibold">Effortless Color Exploration</h3>
        <p className="mt-4 w-3/4    ">
          Our intuitive color picker tool empowers you to discover and
          experiment with a vast spectrum of colors seamlessly. Unlock your
          creativity and find the perfect hues for your projects with ease.
        </p>
      </div>
    </div>
  );
};

export default InfoSection2;
