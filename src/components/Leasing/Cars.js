import React from 'react';
import carsLogo from "../../assets/images/carsLogo.png"

const Cars = ({showRightSide}) => {


    return (
        <div className="leasingItem cars">
            <div className="leftSide">
                <div className="header">
                    <h1>Лизинг легковых автомобилей</h1>
                </div>
                <div className="description">
                    <p>1.</p> <span>Аванс 30%</span>
                    <p>2.</p> <span>Балансодержатель – РосТехЛизинг</span>
                    <p>3.</p> <span>Транспортный налог + налог на имущество + страхование (КАСКО, ОСАГО) включены в платежи</span>
                    <p>4.</p> <span>Минимальная сумма сделки 500 000 руб.</span>
                    <p>5.</p> <span>Срок лизинга от 12 месяцев</span>
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