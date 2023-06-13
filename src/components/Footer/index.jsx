import React from 'react';
import { IoIosCall } from 'react-icons/io';
import { FiMail } from 'react-icons/fi';
import { ImLocation } from 'react-icons/im';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="container">
      <div className="footerWrapper">
        <div className="footerItem findUs">
          <div className="icon">
            <NavLink to="/contacts">
              <ImLocation />
            </NavLink>
          </div>
          <div className="text">
            <NavLink to="/contacts">
              <span>г.Оренбург</span>
            </NavLink>
          </div>
        </div>
        <div className="footerItem email">
          <div className="icon">
            <a href="mailto:rtl56@gacv.ru">
              <FiMail />
            </a>
          </div>
          <div className="text">
            <a href="mailto:rtl56@gacv.ru">
              <span>rtl56@gacv.ru</span>
            </a>
          </div>
        </div>
        <div className="footerItem phone">
          <div className="icon">
            <a href="tel:+73532777777">
              <IoIosCall />
            </a>
          </div>
          <div className="text">
            <a href="tel:+73532777777">
              <span>8 3532 77-77-77</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
