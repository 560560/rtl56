import React, {useState} from 'react';
import Cars from "./Cars";
import Tracks from "./Tracks";
import Buses from "./Buses";
import Special from "./Special";
import Equipment from "./Equipment";

const Leasing = ({showRightSide}) => {

    const [slide, setSlide] = useState(0)   // Счетчик текущего слайда
    const [touchStartCoord, setTouchStartCoord] = useState(0) // X координата татча
    const [touchMoveCoord, setTouchMoveCoord] = useState(0) // X координата движения во время татча
    const carousel = document.querySelector("#carousel")




    // Функция принимает событие скролла, определяет направление и передает как направление в обработчик скроллa
    const scrollHandler = (e) => {
        onMouseScroll(e.deltaY / Math.abs(e.deltaY))
    }

    //Функция формирует слайд назначения
    const onMouseScroll = (direction) => {
        carouselAnimation(slide + direction)
    }

    /*Функция принимает индекс слайда, который нужно отобразить, проверяет в пределах ли он массива страниц,
        не он ли сейчас отображен. Если слайд действительно нужно отобразить, анимирует процесс*/
    const carouselAnimation = (destination) => {
        if (destination !== slide && destination >= 0 && destination < pages.length) {
            carousel.classList.add("cross")
            setTimeout(() => {
                setSlide(destination)
                carousel.style.transform = `translateX(0%)`
                carousel.classList.remove("cross")
            }, 400)
        }
    }

    //Функция задает
    const touchHandlerStart = (e) => {
        setTouchStartCoord(e.touches[0].clientX)
        setTouchMoveCoord(e.touches[0].clientX)
    }

    const touchHandlerEnd = (e) => {
        if (touchStartCoord > touchMoveCoord && ((touchStartCoord - touchMoveCoord) > 30)) {
            onMouseScroll(1)
        } else if (touchStartCoord < touchMoveCoord && ((touchMoveCoord - touchStartCoord) > 30)) {
            onMouseScroll(-1)
        }else {
            carousel.style.transform = `translateX(0%)`
        }
    }
    const moveHandler = (e) => {
        setTouchMoveCoord(e.touches[0].clientX)
        let diff = Math.abs(touchStartCoord - touchMoveCoord)
        if (touchStartCoord > touchMoveCoord && ((diff) > 5)) {
            if (slide < pages.length - 1) {
                carousel.style.transform = `translateX(${(touchMoveCoord - touchStartCoord)}px)`
            }

        } else if (touchStartCoord < touchMoveCoord && ((diff) > 5)) {
            if (slide > 0) {
                carousel.style.transform = `translateX(${(touchMoveCoord - touchStartCoord)}px)`

            }
        }

    }


    const pages = [<Cars showRightSide={showRightSide}/>, <Tracks showRightSide={showRightSide}/>,
        <Buses showRightSide={showRightSide}/>,
        <Special showRightSide={showRightSide}/>, <Equipment showRightSide={showRightSide}/>]

    return (
        <div className="leasingWrapper" onWheel={scrollHandler} onTouchStartCapture={touchHandlerStart}
             onTouchMoveCapture={moveHandler} onTouchEndCapture={touchHandlerEnd}>
            <div className="carousel" id="carousel"
            >
                {pages[slide]}
            </div>
            <div className="paginatorWrapper">
                <div className="paginator">
                    {pages.map((p, index) => <div key={index}
                                                  className={`paginatorItem${index === slide ? " active" : ""}`}
                                                  onClick={() => {
                                                      carouselAnimation(index)
                                                  }}></div>)}
                </div>

            </div>
        </div>
    )

}
export default Leasing;