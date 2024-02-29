import Link from "next/link";
import { Amaranth } from "next/font/google";

const amaranth = Amaranth({ subsets: ["latin"], weight: '400' });

export default function NavbarButton({ data }) {
    return (
        <button className={(data !== "Sign In") ? "rounded-3xl w-2/12 border-2 border-white px-4 py-2 " + amaranth.className : "rounded-3xl w-4/12 border-2 border-white px-4 py-2 " + amaranth.className}>
            <Link href={`/${"home"}`}>
                {data}
            </Link>
        </button>
    )
}