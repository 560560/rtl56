import React from 'react';
import tracksLogo from '../../../../assets/images/tracksLogo.png';
import { descriptionsTracks } from '../../descriptions';

export const Tracks = ({ showRightSide }) => (
  <div className="leasingItem tracks">
    <div className="leftSide">
      <div className="header">
        <h1>Базовые условия лизинга грузовых автомобилей</h1>
      </div>
      <div className="description">
        {descriptionsTracks.map((description, index) => (
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
          <img src={tracksLogo} alt="Лизинг грузовых автомобилей" />
        </div>
      </div>
    )}
  </div>
);
