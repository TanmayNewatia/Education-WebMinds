import Image from "next/image";
import img from "../public/signup.svg";
import Navbar from "./components/home/Navbar";
import HeroSection from "./components/home/HeroSection";
export default function Home() {
  return (
    <>
      {/* <Image src={img} alt="Sign up" width={"100vw"} height={"100vh"} /> */}
      <HeroSection />
    </>
  );
}
