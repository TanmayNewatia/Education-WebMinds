'use client'

import Image from "next/image";
import img from "../../public/signup.svg";
import Navbar from "../components/home/nav/Navbar";
import HomePage from "../components/home/HomePage";

export default function Profile() {
  return (
    <>
      {/* <Image src={img} alt="Sign up" width={"100vw"} height={"100vh"} /> */}
      <HomePage />
    </>
  );
}
