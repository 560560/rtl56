import React from 'react';

import Cars from "./Cars";
import Tracks from "./Tracks";
import Buses from "./Buses";
import Special from "./Special";
import Equipment from "./Equipment";

import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination} from "swiper"
import "swiper/swiper-bundle.css"

SwiperCore.use([Navigation, Pagination])

const Leasing = ({showRightSide}) => {


    const pages = [
        <Cars showRightSide={showRightSide}/>,
        <Tracks showRightSide={showRightSide}/>,
        <Buses showRightSide={showRightSide}/>,
        <Special showRightSide={showRightSide}/>,
        <Equipment showRightSide={showRightSide}/>
    ]
    let slides = []
    for (let i = 0; i < pages.length; i++) {
        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                {pages[i]}
            </SwiperSlide>
        )
    }

    return (
        <div className="leasingWrapper">

            <Swiper id="main" navigation pagination={{clickable: true}}>
                {slides}
            </Swiper>

        </div>
    )

}
export default Leasing;