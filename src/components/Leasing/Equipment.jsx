import React from 'react';
import equipmentLogo from "../../assets/images/equipmentLogo.png";
import {descriptionsEquipment} from "./descriptions";

const Equipment = ({showRightSide}) => {


    return (
        <div className="leasingItem equipment">
            <div className="leftSide">
                <div className="header">
                    <h1>Базовые условия лизинга оборудования</h1>
                </div>
                <div className="description">
                    {descriptionsEquipment.map((description, index) =>
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
                    <img src={equipmentLogo} alt="Лизинг оборудования"/>
                </div>
            </div>
            }


        </div>
    );
}

export default Equipment;

