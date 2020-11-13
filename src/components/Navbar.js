import React from 'react';
import logo from "../assets/images/logo.png"

const Navbar = (props) => {
    return (
        <div className="navbarWrapper">
            <div className="logo">
                <img src={logo} alt="Logo" />
                <div className="logoText">
                    <p>РосТехЛизинг</p>
                    <span>реновация основных средств и технологий лизинга</span>
                </div>
            </div>
            <div className="navbarMenu">
                <ul>
                    <li>Главная</li>
                    <li>О компании</li>
                    <li>Услуги лизинга</li>
                    <li>Документы</li>
                    <li>Вопрос-ответ</li>
                    <li>Контакты</li>
                </ul>
            </div>
            <div className="navbarContacts">


                <a href="tel:+73532270787"><span>+7 (3532) 27-07-87</span></a>

            </div>
        </div>
    );
}

export default Navbar;