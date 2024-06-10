import React from "react";
import { FaSwatchbook, FaEye, FaCodeBranch, FaDownload } from "react-icons/fa";

const InfoSection1 = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-end py-24 mb-12">
      <div className="md:w-1/2 mb-8 md:mb-0 px-6 md:px-0">
        <h3 className="font-semibold text-2xl mb-3">
          Powerful Color Picker for Your Design Needs
        </h3>
        <p className="mb-4 text-gray-600">
          Discover the perfect color for your projects with our advanced color
          picker tool, packed with features to streamline your design workflow.
        </p>
        <ul className="grid grid-cols-2 gap-6 p-6 text-gray-400">
          <li className="mb-2">
            <FaSwatchbook className="mb-2 text-3xl text-gray-700" />
            <p className="font-semibold">Live Previews</p>
            <p>Extensive color palette with millions of shades</p>
          </li>
          <li className=" mb-2">
            <FaEye className="mb-2 text-3xl text-gray-700" />
            <p className="font-semibold">Live Previews</p>
            <p>Live color preview for accurate selection</p>
          </li>
          <li className="mb-2">
            <FaCodeBranch className="mb-2 text-3xl text-gray-700" />
            <p className="font-semibold">Live Previews</p>
            <p>Support for various color formats (HEX, RGB, HSL)</p>
          </li>
          <li className="mb-2">
            <FaDownload className="mb-2 text-3xl text-gray-700" />
            <p className="font-semibold">Live Previews</p>
            <p>Easy color code copying and exporting</p>
          </li>
        </ul>
      </div>
      <img
        alt="info section 1"
        src="/images/info-section-image1.png"
        className="md:w-[40%] px-8 py-8 md:py-0"
      />
    </div>
  );
};

export default InfoSection1;
