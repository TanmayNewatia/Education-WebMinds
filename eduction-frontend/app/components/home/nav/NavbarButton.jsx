import Link from "next/link";
import { Amaranth } from "next/font/google";

const amaranth = Amaranth({ subsets: ["latin"], weight: '400' });

export default function NavbarButton({ data }) {
    return (
        <Link className={(data !== "Sign In") ? "flex justify-center items-center rounded-3xl w-2/12 border-2 border-white px-4 py-2 " + amaranth.className : "flex justify-center items-center rounded-3xl w-4/12 border-2 border-white px-4 py-2 " + amaranth.className} href={`/${(data !== "Sign In" && data !== "Home") ? data.toLowerCase() : (data !== "Home") ? "signin" : "/"}`}>
            {data}
        </Link>
    )
}