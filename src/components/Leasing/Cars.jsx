import React from 'react';
import carsLogo from "../../assets/images/carsLogo.png"
import {descriptions} from "./descriptions"

const Cars = ({showRightSide}) => {

    return (
        <div className="leasingItem cars">
            <div className="leftSide">
                <div className="header">
                    <h1>Базовые условия лизинга легковых автомобилей</h1>
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
                    <img src={carsLogo} alt="Лизинг легковых автомобилей"/>
                </div>
            </div>
            }

        </div>
    );
}

export default Cars;