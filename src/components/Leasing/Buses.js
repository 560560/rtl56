import React from 'react';
import busesLogo from "../../assets/images/busesLogo.png";

const Buses = ({showRightSide}) => {


    return (
        <div className="leasingItem buses">
            <div className="leftSide">
                <div className="header">
                    <h1>Лизинг коммерческого транспорта</h1>
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
                    <img src={busesLogo} alt="Лизинг коммерческого транспорта"/>
                </div>
            </div>
            }
        </div>
    );
}

export default Buses;