import React, {Component} from 'react';
import Home from "./Home";
import {withRouter} from "react-router";

class HomeContainer extends Component {

    screenHeightDetection = () => {
        let screenHeight = window.screen.height
        document.getElementsByClassName('manualHeight')[0].style.height = `${screenHeight}px`

    }

    horizontalTest = () => {
        if (window.screen.orientation.type === "landscape-primary" && (this.props.history.location.pathname === "/" || this.props.history.location.pathname === "/home")) {
            if (document.getElementsByClassName('manualHeight')[0]) {
                document.getElementsByClassName('manualHeight')[0].style.height = `100%`
            }
            document.querySelector("#background").classList.add("horizontal")
            document.querySelector("#background").classList.remove("manualHeight")
            document.querySelector("#headerContent").classList.add("horizontal")


        } else if (this.props.history.location.pathname === "/" || this.props.history.location.pathname === "/home") {
            document.querySelector("#background").classList.remove("horizontal")
            document.querySelector("#background").classList.add("manualHeight")
            document.querySelector("#headerContent").classList.remove("horizontal")
            this.screenHeightDetection()

        }
    }


    componentDidMount() {

        this.horizontalTest()
        window.addEventListener("orientationchange", () => {
            this.horizontalTest()
        })
    }



    render() {
        return (
            <Home/>
        );
    }
}

export default withRouter(HomeContainer);