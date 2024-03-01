import Image from "next/image";
import NavbarButton from "./NavbarButton";
import { IoPerson } from "react-icons/io5";
import logo from "../../../../public/logo.svg";

export default function Navbar() {
    const navButtons = ["Home", "Courses", "Discussion", "Contact"];
    const navList = navButtons.map((button, key) => {
        return (
            <NavbarButton data={button} key={key} />
        )
    });
    return (
        <header className="flex justify-between w-11/12 mx-auto h-[100px] items-center text-lg text-white">
            <div className="fixed t-0 flex justify-between w-11/12 mx-auto items-center text-lg text-white">
                <div className="flex w-8/12">
                    <Image src={logo} alt="Logo" width={"50"} height={"50"} />
                    {navList}
                </div>
                <div className="flex items-center w-4/12 justify-end">
                    <NavbarButton data={"Sign In"} />
                    <button className="rounded-full border-2 border-white text-3xl p-3"><IoPerson /></button>
                </div>
            </div>
        </header>
    )
}