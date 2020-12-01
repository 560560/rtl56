import React, {Component} from 'react';
import Leasing from "./Leasing";

class LeasingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {showRightSide: true};
    }


    componentDidMount() {

        if (window.screen.width < 930 && window.screen.height < 980) {
            this.setState({showRightSide: false})
        } else {
            this.setState({
                showRightSide: true
            })
        }
        this.onOrientationChange()
        window.addEventListener("orientationchange", () => {
            this.onOrientationChange()
            console.log("Was")
        })


    }

    onOrientationChange = () => {
        let navbarHeight = document.querySelector(".navbarWrapper").clientHeight
        if (window.screen.orientation.type === "portrait-primary" && window.screen.height < 900) {
            document.querySelector(".leasingItem").style.height = `${window.screen.height * 0.8 - navbarHeight}px`
        } else if (window.screen.orientation.type === "landscape-primary" && window.screen.height < 500) {
            document.querySelector(".leasingItem").style.height = `${window.screen.height - navbarHeight - 60}px`
        }
    }

    render() {
        return (
            <Leasing showRightSide={this.state.showRightSide}/>
        );
    }
}

export default LeasingContainer;