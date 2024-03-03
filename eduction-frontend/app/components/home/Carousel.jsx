import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CourseCard from './homecards/CourseCard';
import InterviewCard from './homecards/InterviewCard';

export default function Carousel({ height, section }) {
    return (
        <div className='carousel' style={{ height: `${height}%` }}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {(section === "course") ?
                    <>
                        <SwiperSlide><CourseCard data={""} width={"w-[45vw]"} /><CourseCard data={""} width={"w-[45vw]"} /></SwiperSlide>
                        <SwiperSlide><CourseCard data={""} width={"w-[45vw]"} /><CourseCard data={""} width={"w-[45vw]"} /></SwiperSlide>
                        <SwiperSlide><CourseCard data={""} width={"w-[45vw]"} /><CourseCard data={""} width={"w-[45vw]"} /></SwiperSlide>
                        <SwiperSlide><CourseCard data={""} width={"w-[45vw]"} /><CourseCard data={""} width={"w-[45vw]"} /></SwiperSlide>
                    </>
                    :
                    <>
                        <SwiperSlide><InterviewCard data={""} /><InterviewCard data={""} /></SwiperSlide>
                        <SwiperSlide><InterviewCard data={""} /><InterviewCard data={""} /></SwiperSlide>
                        <SwiperSlide><InterviewCard data={""} /><InterviewCard data={""} /></SwiperSlide>
                        <SwiperSlide><InterviewCard data={""} /><InterviewCard data={""} /></SwiperSlide>
                    </>}
            </Swiper>
        </div>
    );
}
