import React from 'react';
import EmailForm from "../EmailForm/EmailForm";
import {IoIosCall, IoLogoWhatsapp} from "react-icons/io";
import {FiMail} from "react-icons/fi";
import {ImLocation} from "react-icons/im";
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import portret from "../../assets/images/portret.jpg"


const mapData = {
    center: [51.768199, 55.095293],
    zoom: 18,
};

const coordinates = [
    [51.768199, 55.095293]

];

const Contacts = (props) => {


    return (
        <header className="contactsWrapper">

            <div className="contactsHeader"><h1>Контакты</h1></div>

            <div className="contactsContent">
                <div className="leftSide">
                    <div className="block-item phone-block">
                        <div className="icon"><IoIosCall/></div>
                        <div className="description">
                            <div className="title">Телефон:</div>
                            <div className="text"><a href="tel:+79033670787">8 (903) 367-07-87</a></div>
                        </div>
                    </div>
                    <div className="block-item email-block">
                        <div className="icon"><FiMail/></div>
                        <div className="description">
                            <div className="title">E-mail:</div>
                            <div className="text"><a href="rostehlizing.56@mail.ru">rostehlizing.56@mail.ru</a></div>
                        </div>
                    </div>
                    <div className="block-item whatsapp-block">
                        <div className="icon"><IoLogoWhatsapp/></div>
                        <div className="description">
                            <div className="title">Whatsapp:</div>
                            <div className="text"><a
                                href="whatsapp://send?text=Здравствуйте. Я сейчас на вашем сайте rtl56.ru. Есть вопрос: &phone=79033670787&abid=+79033670787">
                                +7 903 367-07-87</a>
                            </div>
                        </div>
                    </div>
                    <div className="block-item address-block">
                        <div className="icon"><ImLocation/></div>
                        <div className="description">
                            <div className="title">Адрес:</div>
                            <div className="text"><a href="https://yandex.ru/maps/?rtext=~51.775416%2C55.164949"
                                                     target="_blank" rel="noreferrer">460008 Россия,
                                г.Оренбург</a></div>
                        </div>

                    </div>

                </div>
                <div className="rightSide">
                    <EmailForm buttonTitle="Заказать обратный звонок" sitePage="Контакты" additionalInfo="contacts"/>
                </div>
            </div>

            <div className="requisitesWrapper">
                <div className="requisites">
                    <div className="requisitesHeader">
                        <h2>Реквизиты компании</h2>
                    </div>

                    <p>Полное наименование</p>
                    <span>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "РОСТЕХЛИЗИНГ"</span>
                    <p>ИНН</p>
                    <span>5610122954</span>
                    <p>КПП</p>
                    <span>561001001</span>
                    <p>ОГРН</p>
                    <span>1085658021866</span>
                    <p>Юридический адрес</p>
                    <span>460008, г.Оренбург, поселок Ростоши, улица Садовое Кольцо, дом 128, квартира 18</span>

                </div>
                {/*<div className="generalWrapper">
                    <div className="general">
                        <div className="generalHeader">
                            <h2>Генеральный директор</h2>
                        </div>
                        <img src={portret} alt="Горохов Александр Иванович"/>
                        <h4>Иванов Александр Иванович</h4>

                    </div>
                </div>*/}
            </div>
            <div className="map">
                <YMaps>
                    <Map defaultState={mapData} width="100%" height="400px">
                        {coordinates.map(coordinate => <Placemark geometry={coordinate} key={Math.random()}
                                                                  options={{iconColor: '#da251d'}}/>)}
                    </Map>
                </YMaps>
            </div>
        </header>

    );
}

export default Contacts;