import Carousel from "./Carousel";
import ProgressSection from "./progress/ProgressSection";

export default function CourseSection() {
    return (
        <div className="course h-screen w-screen">
            <ProgressSection />
            <Carousel height="45" section="course"/>
        </div>
    )
}