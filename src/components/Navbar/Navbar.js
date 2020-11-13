import React from 'react';
import logo from "../../assets/images/logo.png"
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
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
                <div className="navbarMenu">
                    <ul>
                        <li><NavLink to="/">Главная</NavLink></li>
                        <li><NavLink to="/leasing">Услуги лизинга</NavLink></li>
                        <li><NavLink to="/docs">Документы</NavLink></li>
                        <li><NavLink to="/faq">Вопрос-ответ</NavLink></li>
                        <li><NavLink to="/about">О компании</NavLink></li>
                        <li><NavLink to="/contacts">Контакты</NavLink></li>
                    </ul>
                </div>
                <div className="navbarContacts">
                    <a href="tel:+73532270787"><span>8 (3532) 27-07-87</span></a>

                </div>
            </div>
        </div>
    );
}

export default Navbar;