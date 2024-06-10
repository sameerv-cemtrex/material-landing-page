import React from "react";
import { Button } from "@mui/material";
const Pricing = () => {
  return (
    <div className="py-16 mt-10 flex bg-blue-50 sm:bg-transparent flex-col items-center justify-center relative">
      <div className="bg-blue-50 hidden md:block absolute -z-10 inset-y-0 max-2xl:-inset-x-20" />
      <h3 className="text-2xl font-semibold text-center mb-3">
        A Price To Suit Everyone
      </h3>

      <p className="text-center text-gray-700 font-light w-1/2 mb-6">
        Our pricing is designed to be simple and affordable for everyone. Get
        access to all the features and tools you need to build and launch your
        next project.
      </p>

      <p className="text-5xl font-bold pt-6 pb-3 text-center">$30</p>
      <p className="text-sm text-gray-600 mb-8 text-center">UI Design Kit</p>

      <p className="text-sm text-gray-600 mb-3 text-center">
        See, one price. Simple.
      </p>
      <Button variant="contained" size="small" color="primary" sx={{ px: 2 }}>
        Purchase Now
      </Button>
    </div>
  );
};

export default Pricing;
