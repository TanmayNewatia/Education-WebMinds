import { BsArrowDownRightCircle } from "react-icons/bs";
import Link from "next/link";

export default function DisQuesCard({ data, link }) {
    return (
        <div className="flex justify-between items-center p-8 border-1 border-black rounded-lg">
            <div>
                <h2 className="text-3xl">{data}</h2>
                <span>{(link) ? "Opened By" : ""}</span>
            </div>
            <Link href="/discussion"><BsArrowDownRightCircle className="text-6xl hover:-rotate-90 transition-all" /></Link>
        </div>
    )
}