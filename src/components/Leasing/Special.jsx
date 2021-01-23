import React from 'react';
import specialLogo from "../../assets/images/specialLogo.png";
import {descriptions} from "./descriptions";

const Special = ({showRightSide}) => {


    return (
        <div className="leasingItem special">
            <div className="leftSide">
                <div className="header">
                    <h1>Базовые условия лизинга специальной техники</h1>
                </div>
                <div className="description">
                    {descriptions.map((description, index) =>
                        <div key={index} className="descriptionItem">
                            <p>{description.title}</p>
                            <span>{description.body}</span>
                        </div>
                    )}
                    <h4>Базовые условия — не значит, окончательные. Мы готовы подобрать индивидуальные условия под ваш бизнес: предлагаем гибкий график,
                        согласовываем сроки лизинга и суммы лизинговых платежей.</h4>
                </div>
            </div>
            {showRightSide &&
            <div className="rightSide">
                <div className="leasingImage">
                    <img src={specialLogo} alt="Лизинг специальной техники"/>
                </div>
            </div>
            }

        </div>
    );
}

export default Special;