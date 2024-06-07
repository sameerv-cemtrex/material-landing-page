import React from "react";
import { Button, IconButton } from "@mui/material";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative py-8">
      <div className="bg-blue-100 absolute -z-10 inset-y-0 -inset-x-20" />
      <div className="py-8 flex items-center justify-between border-b border-gray-300">
        <p className="text-gray-400">©2023 CXR Agency</p>
        {/* <p className="text-2xl text-blue-950 font-bold">Landing</p> */}
        <Button
          variant="contained"
          sx={{ background: "#111B47", py: 1.2, px: 3, color: "#fff" }}
          size="small"
        >
          Purchase Now
        </Button>
      </div>

      <div className="flex justify-between items-center p-4">
        <ul className="flex items-center space-x-6 text-gray-400">
          <li>
            <Button>Home</Button>
          </li>
          <li>
            <Button>About</Button>
          </li>
          <li>
            <Button>Contact</Button>
          </li>
        </ul>

        <ul className="flex items-center space-x-2">
          <li>
            <IconButton size="small">
              <FaFacebook color="gray" />
            </IconButton>
          </li>
          <li>
            <IconButton size="small">
              <FaLinkedinIn color="gray" />
            </IconButton>
          </li>
          <li>
            <IconButton size="small">
              <FaTwitter color="gray" />
            </IconButton>
          </li>
          <li>
            <IconButton size="small">
              <FaYoutube color="gray" />
            </IconButton>
          </li>
          <li>
            <IconButton size="small">
              <FaInstagram color="gray" />
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
