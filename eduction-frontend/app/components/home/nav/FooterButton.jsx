import Link from "next/link";


export default function FooterButton({ data }) {
    return (
        <button className={"rounded-3xl w-2/12 border-[1px] border-black px-4 py-2 "}>
            <Link href={`/${data.lower}`}>
                {data}
            </Link>
        </button>
    )
}