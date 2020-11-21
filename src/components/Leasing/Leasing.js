import React, {useState} from 'react';
import Cars from "./Cars";
import Tracks from "./Tracks";
import Buses from "./Buses";

const Leasing = (props) => {
    const [slide, setSlide] = useState(0)

    const scrollHandler = (e) => {
        if (e.deltaY > 0) {
            onMouseScrollDown(e.deltaY / Math.abs(e.deltaY))
        } else {
            onMouseScrollUp(e.deltaY / Math.abs(e.deltaY))
        }
    }

    const onPaginatorClick = (chosenIndex) => {
        if (chosenIndex < slide) {
            carouselAnimation(chosenIndex)
        } else if (chosenIndex > slide) {
            carouselAnimation(chosenIndex)
        }
    }

    const onMouseScrollUp = (direction) => {
        if (slide > 0) {
            carouselAnimation(slide + direction)
        }
    }

    const onMouseScrollDown = (direction) => {
        if (slide < pages.length - 1) {
            carouselAnimation(slide + direction)
        }
    }

    const carouselAnimation = (destination) => {
        document.querySelector("#carousel").classList.add("cross")
        setTimeout(() => {
            document.querySelector("#carousel").classList.remove("cross")
            setSlide(destination)
        }, 400)
    }

    const pages = [<Cars/>, <Tracks/>, <Buses/>]

    return (
        <div className="leasingWrapper" onWheel={scrollHandler}>
            <div className="carousel" id="carousel">
                {pages[slide]}
            </div>
            <div className="paginatorWrapper">
                <div className="paginator">
                    {pages.map((p, index) => <div key={index} className={`paginatorItem${index === slide ? " active" : ""}`} onClick={() => {
                        onPaginatorClick(index)
                    }}></div>)}
                </div>

            </div>
        </div>
    )

}
export default Leasing;