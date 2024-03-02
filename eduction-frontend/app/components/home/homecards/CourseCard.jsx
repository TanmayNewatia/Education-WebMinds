import styles from "../../../styles/home.module.css";
import { FaRegHeart } from "react-icons/fa";
import star from "../../../../public/star.svg";
import Image from "next/image";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function CourseCard({ data }) {
    return (
        <div className={styles.coursecard + " text-white min-w-[300px] w-[45vw] h-5/6 flex flex-col justify-between rounded-lg p-4 my-4"}>
            <div className="flex justify-between w-11/12 mx-auto">
                <h3 className="text-2xl">DSA to Development</h3>
                <button className={"w-[40px] h-[40px] rounded-full flex justify-center items-center " + styles.heartbtn}>
                    <FaRegHeart className="text-black" />
                </button>
            </div>
            <div className={"flex justify-between items-center w-11/12 p-2 mx-auto rounded-lg " + styles.coursecard_content}>
                <div>
                    <Image src={star} alt="star" className="!w-[200px] !h-[30px]" />
                    <h4 className="text-lg">DSA to Development</h4>
                    <h5 className="text-sm">Self Paced</h5>
                    <h4 className="text-lg">₹1200.00</h4>
                </div>
                <FaCircleArrowRight className="!text-4xl hover:!text-8xl !text-black transition-all"/>
            </div>
        </div>
    )
}