import Image from "next/image";
import { Button } from "@mui/material";
import Hero from "@/components/Hero";
import InfoSection1 from "@/components/InfoSection1";
import InfoSection2 from "@/components/InfoSection2";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <InfoSection1 />
      <InfoSection2 />
      <Pricing />
    </div>
  );
}
