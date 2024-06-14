"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);

const InfoSection2 = () => {
  return (
    <div className="md:flex items-center py-16 my-16 info-container-1">
      <motion.img
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.4, delay: 1.2 }}
        viewport={{ once: true }}
        alt="info section 2"
        src="/images/info-section-image2.png"
        className="md:w-1/2 px-12 py-8 md:py-0 info1"
      />

      <div className="md:w-1/2 px-8 text-center md:text-start">
        <h3 className="text-2xl font-semibold">Effortless Color Exploration</h3>
        <p className="mt-4 md:w-3/4    ">
          Our intuitive color picker tool empowers you to discover and
          experiment with a vast spectrum of colors seamlessly. Unlock your
          creativity and find the perfect hues for your projects with ease.
        </p>
      </div>
    </div>
  );
};

export default InfoSection2;
