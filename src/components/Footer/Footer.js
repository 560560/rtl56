import React from 'react';
import {IoIosCall} from "react-icons/io";
import {FiMail} from "react-icons/fi";
import {ImLocation} from "react-icons/im";
import {NavLink} from "react-router-dom";

const Footer = (props) => {
    return (
        <div className="container">
            <div className="footerWrapper">
                <div className="footerItem findUs">
                    <div className="icon"><NavLink to="/contacts"><ImLocation/></NavLink></div>
                    <div className="text"><NavLink to="/contacts"><span>г.Оренбург, ул. Мало-луговая, д.3/1 оф.7</span></NavLink></div>
                </div>
                <div className="footerItem email">
                    <div className="icon"><a href="mailto:mail@example.com"><FiMail/></a></div>
                    <div className="text"><a href="mailto:mail@example.com"><span>rostehlizing.56@mail.ru</span></a></div>
                </div>
                <div className="footerItem phone">
                    <div className="icon"><a href="tel:+73532270787"><IoIosCall/></a></div>
                    <div className="text"><a href="tel:+73532270787"><span>8 (3532) 27-07-87</span></a></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;