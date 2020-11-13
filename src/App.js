import React from "react"
import './styles/reset.css';
import './styles/main.sass';
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div className="appWrapper">
            <Navbar/>
        </div>
    );
}


export default App;
