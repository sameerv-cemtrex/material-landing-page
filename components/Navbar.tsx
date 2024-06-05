import React from "react";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="text-xl font-bold text-blue-500">Landing</div>
      <ul className="flex items-center ml-auto mr-8 space-x-4 text-sm text-gray-600 text-semibold">
        <li>
          <Button variant="text" size="small" color="inherit">
            Home
          </Button>
        </li>
        <li>
          <Button variant="text" size="small" color="inherit">
            About
          </Button>
        </li>
        <li>
          <Button variant="text" size="small" color="inherit">
            Contact
          </Button>
        </li>
      </ul>

      <div className="flex space-x-3 items-center">
        <Button variant="contained" size="small" color="inherit">
          Purchase UI Kit
        </Button>
        <Button variant="outlined" size="small" color="inherit">
          Contact Us
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
