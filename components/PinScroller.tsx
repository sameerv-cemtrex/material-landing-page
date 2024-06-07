"use client";
import React from "react";
import InfoSection2 from "./InfoSection2";
import InfoSection3 from "./InfoSection3";
import InfoSection4 from "./InfoSection4";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const PinScroller = () => {
  const container = React.useRef<HTMLDivElement>(null);
  const sections = [
    { container: ".info-container-1", image: ".info1" },
    { container: ".info-container-2", image: ".info2" },
    { container: ".info-container-3", image: ".info3" },
  ];

  useGSAP(() => {}, { scope: container });
  return (
    <div ref={container}>
      <InfoSection2 />
      <InfoSection3 />
      <InfoSection4 />
    </div>
  );
};

export default PinScroller;
