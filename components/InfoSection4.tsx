"use client";
import React from "react";
import { motion } from "framer-motion";

const InfoSection4 = () => {
  return (
    <div className="md:flex items-center py-16 my-16 info-container-3">
      <motion.img
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.4, delay: 1 }}
        viewport={{ once: true }}
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
