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

    }

    render() {
        return (
            <Leasing showRightSide={this.state.showRightSide}/>
        );
    }
}

export default LeasingContainer;