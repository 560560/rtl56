import React, {useState} from 'react';
import Cars from "./Cars";
import Tracks from "./Tracks";
import Buses from "./Buses";
import Special from "./Special";
import Equipment from "./Equipment";

const Leasing = ({showRightSide}) => {
    const [slide, setSlide] = useState(0)
    const [touchStartCoord, setTouchStartCoord] = useState(0)
    const [touchMoveCoord, setTouchMoveCoord] = useState(0)

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
            setSlide(destination)
            document.querySelector("#carousel").classList.remove("cross")

        }, 400)
    }

    const touchHandlerStart = (e) => {
        setTouchStartCoord(e.touches[0].clientX)
        setTouchMoveCoord(e.touches[0].clientX)

    }

    const touchHandlerEnd = (e) => {

        if (touchStartCoord > touchMoveCoord && ((touchStartCoord - touchMoveCoord) > 20) ) {
            console.log("Слайданули вперед")
        } else if (touchStartCoord < touchMoveCoord && ((touchMoveCoord - touchStartCoord) > 20)  ) {
            console.log("Слайданули назад")
        }
    }
    const moveHandler = (e) => {
        setTouchMoveCoord(e.touches[0].clientX)

    }


    const pages = [<Cars showRightSide={showRightSide}/>, <Tracks showRightSide={showRightSide}/>,
        <Buses showRightSide={showRightSide}/>,
        <Special showRightSide={showRightSide}/>, <Equipment showRightSide={showRightSide}/>]

    return (
        <div className="leasingWrapper" onWheel={scrollHandler}>
            <div className="carousel" id="carousel" onTouchStartCapture={touchHandlerStart}
                 onTouchMoveCapture={moveHandler} onTouchEndCapture={touchHandlerEnd}
            >
                {pages[slide]}
            </div>
            <div className="paginatorWrapper">
                <div className="paginator">
                    {pages.map((p, index) => <div key={index}
                                                  className={`paginatorItem${index === slide ? " active" : ""}`}
                                                  onClick={() => {
                                                      onPaginatorClick(index)
                                                  }}></div>)}
                </div>

            </div>
        </div>
    )

}
export default Leasing;