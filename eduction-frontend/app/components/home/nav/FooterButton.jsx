import Link from "next/link";


export default function FooterButton({ data }) {
    return (
        <Link className="flex justify-center items-center rounded-3xl w-2/12 border-[1px] border-black px-4 py-2 " href={`/${data.lower}`}>
            {data}
        </Link>
    )
}