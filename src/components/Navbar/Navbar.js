import React, {useEffect, useState} from 'react';
import logo from "../../assets/images/logo.png"
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";

const Navbar = (props) => {

    const [activeBurger, setActiveBurger] = useState(false)
    useEffect(() => {
        if (props.location.pathname === "/" || props.location.pathname === "/home") {
            document.querySelector("#homeLink").children.item(0).classList.add("active")
            document.querySelector(".navbarWrapper").classList = "navbarWrapper home"
            document.querySelector(".appWrapper").classList = "appWrapper home"
        } else if (props.location.pathname === "/leasing") {
            document.querySelector(".navbarWrapper").classList = "navbarWrapper leasing"
            document.querySelector(".appWrapper").classList = "appWrapper leasing"
            document.querySelector("#homeLink").children.item(0).classList.remove("active")
        } else if (props.location.pathname === "/docs") {
            document.querySelector(".navbarWrapper").classList = "navbarWrapper documents"
            document.querySelector(".appWrapper").classList = "appWrapper documents"
            document.querySelector("#homeLink").children.item(0).classList.remove("active")
        } else if (props.location.pathname === "/faq") {
            document.querySelector(".navbarWrapper").classList = "navbarWrapper faq"
            document.querySelector(".appWrapper").classList = "appWrapper faq"
            document.querySelector("#homeLink").children.item(0).classList.remove("active")
        } else if (props.location.pathname === "/about") {
            document.querySelector(".navbarWrapper").classList = "navbarWrapper about"
            document.querySelector(".appWrapper").classList = "appWrapper about"
            document.querySelector("#homeLink").children.item(0).classList.remove("active")
        } else if (props.location.pathname === "/contacts") {
            document.querySelector(".navbarWrapper").classList = "navbarWrapper contacts"
            document.querySelector(".appWrapper").classList = "appWrapper contacts"
            document.querySelector("#homeLink").children.item(0).classList.remove("active")
        }
    }, [props.location.pathname])

    if (activeBurger) {
        document.querySelector("body").classList.add("lock")
    } else {
        document.querySelector("body").classList.remove("lock")
    }

    return (
        <div className="container">
            <div className="navbarWrapper">
                <div className="logo">
                    <img src={logo} alt="Logo"/>
                    <div className="logoText">
                        <p>РосТехЛизинг</p>

                        <span>реновация основных средств и технологий лизинга</span>
                    </div>
                </div>
                <div className={`navbarMenu${activeBurger ? " active" : ""}`}>
                    <ul>
                        <li id="homeLink"><NavLink to="/home">Главная</NavLink></li>
                        <li><NavLink to="/leasing">Услуги лизинга</NavLink></li>
                        <li><NavLink to="/docs">Документы</NavLink></li>
                        {/*<li><NavLink to="/faq">Вопрос-ответ</NavLink></li>*/}
                        <li><NavLink to="/about">О компании</NavLink></li>
                        <li><NavLink to="/contacts">Контакты</NavLink></li>
                    </ul>
                </div>
                <div className="navbarContacts">
                    <a href="tel:+73532270787"><span>8 (3532) 27-07-87</span></a>

                </div>
                <div className={`burgerMenu${activeBurger ? " active" : ""}`} onClick={() => {
                    setActiveBurger(!activeBurger)
                }}>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Navbar);