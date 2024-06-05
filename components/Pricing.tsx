import React from "react";
import { Button } from "@mui/material";
const Pricing = () => {
  return (
    <div className="bg-blue-00 py-16 my-10 flex flex-col items-center justify-center relative">
      <div className="bg-blue-50 absolute -z-10 inset-0 max-2xl:-inset-x-20" />
      <h3 className="text-2xl font-semibold text-center mb-3">
        A Price To Suit Everyone
      </h3>

      <p className="text-center text-blue-400 w-1/2 mb-6">
        mb-6 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus{" "}
      </p>

      <p className="text-5xl font-bold pt-6 pb-3 text-center">$30</p>
      <p className="text-sm text-gray-600 mb-8 text-center">UI Design Kit</p>

      <p className="text-sm text-gray-600 mb-3 text-center">
        See, one price. Simple.
      </p>
      <Button variant="contained" size="small" color="inherit">
        Purchase Now
      </Button>
    </div>
  );
};

export default Pricing;
