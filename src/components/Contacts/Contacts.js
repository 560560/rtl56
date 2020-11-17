import React from 'react';
import EmailForm from "../EmailForm/EmailForm";
import bcgContacts from "../../assets/images/bcgContacts.jpg";

const Contacts = (props) => {
    return (
        <header className="contactsWrapper">
            <div className="background" id="background">
                <img src={bcgContacts} alt="Лизинг для юридических лиц и ИП" title="Лизинг для юридических лиц и ИП"/>
            </div>
            <h1>Контакты</h1>
            <div className="contactsContent">
                <div className="leftSide">
                    <div className="contacts">
                        <div className="block-item phone-block">
                            <div className="icon"></div>
                            <div className="title">Телефон:</div>
                            <div className="text">8 (3532) 27-07-87</div>
                        </div>
                        <div className="block-item email-block">
                            <div className="icon"></div>
                            <div className="title">E-mail:</div>
                            <div className="text">rostehlizing.56@mail.ru</div>
                        </div>
                        <div className="block-item whatsapp-block">
                            <div className="icon"></div>
                            <div className="title">Whatsapp:</div>
                            <div className="text">+7 903 367-07-87</div>
                        </div>
                        <div className="block-item address-block">
                            <div className="icon"></div>
                            <div className="title">Адрес:</div>
                            <div className="text">460000 Россия, г.Оренбург, проспект Гагарина д.44, оф.7</div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <EmailForm buttonTitle="Заказать обратный звонок" sitePage="Контакты"/>
                </div>
            </div>
            <div className="map">

            </div>
            <div className="requisites">

            </div>
        </header>

    );
}

export default Contacts;