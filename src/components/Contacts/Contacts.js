import React from 'react';
import EmailForm from "../EmailForm/EmailForm";
import {IoIosCall, IoLogoWhatsapp} from "react-icons/io";
import {FiMail} from "react-icons/fi";
import {ImLocation} from "react-icons/im";
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import portret from "../../assets/images/portret.jpg"


const mapData = {
    center: [51.774711, 55.158696],
    zoom: 17,
};

const coordinates = [
    [51.774107, 55.158696],

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
                            <div className="text"><a href="tel:+73532270787">8 (3532) 27-07-87</a></div>
                        </div>
                    </div>
                    <div className="block-item email-block">
                        <div className="icon"><FiMail/></div>
                        <div className="description">
                            <div className="title">E-mail:</div>
                            <div className="text"><a href="mailto:mail@example.com">rostehlizing.56@mail.ru</a></div>
                        </div>
                    </div>
                    <div className="block-item whatsapp-block">
                        <div className="icon"><IoLogoWhatsapp/></div>
                        <div className="description">
                            <div className="title">Whatsapp:</div>
                            <div className="text"><a
                                href="whatsapp://send?text=Здравствуйте. Я сейчас на вашем сайте rtl56.ru. Есть вопрос: &phone=+79033670787&abid=+79033670787">+7 903
                                367-07-87</a></div>
                        </div>
                    </div>
                    <div className="block-item address-block">
                        <div className="icon"><ImLocation/></div>
                        <div className="description">
                            <div className="title">Адрес:</div>
                            <div className="text"><a href="https://yandex.ru/maps/?rtext=~51.774107%2C55.158696" target="_blank" rel="noreferrer" >460000 Россия, г.Оренбург,<br/> ул.
                                Мало-луговая, д.3/1 оф.7</a></div>
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
                    <span>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "РЕНОВАЦИЯ ОСНОВНЫХ СРЕДСТВ И ТЕХНОЛОГИЙ ЛИЗИНГА"</span>
                    <p>ИНН</p>
                    <span>5610122954</span>
                    <p>КПП</p>
                    <span>561001001</span>
                    <p>ОГРН</p>
                    <span>1085658021866 от 11 июля 2008 г.</span>
                    <p>Юридический адрес</p>
                    <span>460008, Оренбургская область, город Оренбург, улица Садовое Кольцо (Поселок Ростоши Мкр.), дом 128, квартира 18</span>

                </div>
                <div className="generalWrapper">
                    <div className="general">
                        <div className="generalHeader">
                            <h2>Генеральный директор</h2>
                        </div>
                        <img src={portret} alt="Горохов Александр Иванович"/>
                        <h4>Горохов Александр Иванович</h4>

                    </div>
                </div>
            </div>
            <div className="map">
                <YMaps>
                    <Map defaultState={mapData} width="100%" height="400px">
                        {coordinates.map(coordinate => <Placemark geometry={coordinate} key={Math.random()} options={{iconColor: '#da251d'}}/>)}
                    </Map>
                </YMaps>
            </div>
        </header>

    );
}

export default Contacts;