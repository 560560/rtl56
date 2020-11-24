import React, {useEffect} from 'react';
import {withRouter} from "react-router";
import bgHome from "../../assets/images/bcgHome.jpg"
import {GoCalendar} from "react-icons/go";
import {GiPayMoney, GiTwoCoins} from "react-icons/gi";
import {BsClockHistory} from "react-icons/bs";
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
                        <h1>Лизинг для бизнеса</h1>
                    </div>
                    <div className="headerText">
                        <h2>Новые автомобили и техника без переплат в лизинг для юр. лиц и ИП</h2>
                    </div>
                    <div className="headerIcons">
                        <div className="iconItemWrapper">
                            <div className="iconItem"><span><GiTwoCoins/></span><span>Аванс от <b>0%</b></span></div>
                        </div>
                        <div className="iconItemWrapper">
                            <div className="iconItem"><span><GiPayMoney/></span><span>Низкие платежи</span></div>
                        </div>
                        <div className="iconItemWrapper">
                            <div className="iconItem"><span><BsClockHistory/></span><span>Быстрое оформление</span></div>
                        </div>
                        <div className="iconItemWrapper">
                            <div className="iconItem"><span><GoCalendar/></span><span>Срок лизинга от 12 месяцев</span></div>
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
