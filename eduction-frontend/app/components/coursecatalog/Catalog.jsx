import { Amaranth } from "next/font/google"
import CourseCard from "../home/homecards/CourseCard";

const amaranth = Amaranth({ subsets: ["latin"], weight: '400' });

export default function Catalog() {
    return (
        <div className="w-[80vw] min-w-[250px]">
            <div className="w-11/12 min-h-screen min-w-[250px] p-8 flex flex-col gap-4 justify-center">
                <h1 className={"text-4xl " + amaranth.className}>Live Courses</h1>
                <CourseCard data={""} width={"w-full"} />
                <div className="flex w-full justify-between flex-wrap">
                    <CourseCard data={""} width={"w-[45%]"} />
                    <CourseCard data={""} width={"w-[45%]"} />
                </div>
                <CourseCard data={""} width={"w-full"} />
            </div>
        </div>
    )
}