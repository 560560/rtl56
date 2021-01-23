import React from 'react';
import {withRouter} from "react-router";
import bgHome from "../../assets/images/bcgHome.jpg"
import {GoCalendar} from "react-icons/go";
import {GiTwoCoins} from "react-icons/gi";
import {SiAdguard} from "react-icons/si";
import {BsClockHistory} from "react-icons/bs";
import {FaRegGem} from "react-icons/fa";
import EmailForm from "../EmailForm/EmailForm";


const Home = () => {
      return (
        <div className="homeWrapper">
            <div className="background" id="background">
                <img src={bgHome} alt="Лизинг для юридических лиц и ИП" title="Лизинг для юридических лиц и ИП"/>
            </div>
            <div className="headerContent" id="headerContent">
                <div className="leftSide">
                    <div className="header">
                        <h1>Лизинг для любого бизнеса</h1>
                    </div>
                    <div className="headerText">
                        <h2>Автомобили, спецтехника и оборудование для юридических лиц и ИП</h2>
                    </div>
                    <div className="headerIcons">
                        <div className="iconItemWrapper">
                            <div className="iconItem"><span><GiTwoCoins/></span><span>Аванс от <b>10%</b></span></div>
                        </div>
                        <div className="iconItemWrapper">
                            <div className="iconItem"><span><FaRegGem/></span><span>Индивидуальный подход к каждому клиенту</span></div>
                        </div>
                        <div className="iconItemWrapper">
                            <div className="iconItem"><span><BsClockHistory/></span><span>Удобный график платежей</span></div>
                        </div>
                        <div className="iconItemWrapper">
                            <div className="iconItem"><span><GoCalendar/></span><span>Срок лизинга от 12 месяцев до 5 лет</span></div>
                        </div>
                        <div className="iconItemWrapper">
                            <div className="iconItem"><span><SiAdguard/></span><span>Страхование по выгодным тарифам</span></div>
                        </div>

                    </div>
                </div>

                <div className="rightSide">
                    <EmailForm sitePage="Главная" buttonTitle="Оставить заявку" additionalInfo="home"/>

                </div>

            </div>


        </div>
    );
}

export default withRouter(Home);
