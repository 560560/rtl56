import React from 'react';
import busesLogo from '../../../../assets/images/busesLogo.png';
import { descriptions } from '../../descriptions';

export const Buses = ({ showRightSide }) => (
  <div className="leasingItem buses">
    <div className="leftSide">
      <div className="header">
        <h1>Базовые условия лизинга коммерческого транспорта</h1>
      </div>
      <div className="description">
        {descriptions.map((description, index) => (
          <div key={index} className="descriptionItem">
            <p>{description.title}</p>
            <span>{description.body}</span>
          </div>
        ))}
        <h4>
          Базовые условия — не значит, окончательные. Мы готовы подобрать индивидуальные условия под ваш бизнес:
          предлагаем гибкий график, согласовываем сроки лизинга и суммы лизинговых платежей.
        </h4>
      </div>
    </div>
    {showRightSide && (
      <div className="rightSide">
        <div className="leasingImage">
          <img src={busesLogo} alt="Лизинг коммерческого транспорта" />
        </div>
      </div>
    )}
  </div>
);
