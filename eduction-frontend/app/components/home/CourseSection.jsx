import Carousel from "./Carousel";
import ProgressSection from "./progress/ProgressSection";

export default function CourseSection() {
    return (
        <div className="h-screen w-screen">
            <ProgressSection />
            <Carousel height="45"/>
        </div>
    )
}