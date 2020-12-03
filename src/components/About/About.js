import React from 'react';
import EmailForm from "../EmailForm/EmailForm";

const About = (props) => {
    return (
        <div className="aboutWrapper">

            <header className="header">
                <h1>О компании</h1>
                <p>ООО «РосТехЛизинг» было основано 11 июня 2008 года.</p>
                <p>Компания оказывает услуги в сфере лизинга автомобилей всех видов (грузовых, легковых, пассажирских), лизинга оборудования (заводского,
                    промышленного,
                    складского), лизинга спецтехники (экскаваторы, бульдозеры, самосвалы и прочая строительная техника).</p>
                <p>«РосТехЛизинг» сотрудничает с предприятиями любых форм собственности и видов деятельности.</p>


                <p>ООО «РосТехЛизинг» работает по следующим направлениям:</p>
                <ul>
                    <li>финансирование капитальных вложений (финансовый лизинг);</li>
                    <li>финансирование текущей деятельности (возвратный лизинг);</li>
                    <li>консультирование / сопровождение лизинговых операций.</li>
                </ul>
            </header>
            <div className="leftSide">
                <div className="aboutText">

                    <p>«РосТехЛизинг» предлагает клиентам весь комплекс услуг при приобретении оборудования и автотранспорта, включая страхование, помощь в выборе
                        поставщика, согласование с ним условий поставки, монтажа оборудования. Мы представляем потребности участников рынка и готовы совместно со
                        страховыми
                        компаниями и поставщиками предлагать уникальные продукты.</p>
                    <p>Учитывая специфику каждого бизнеса «РосТехЛизинг» ориентировано на индивидуальный
                        подход к каждому клиенту, что позволяет совместно с клиентом разрабатывать наиболее подходящий для него график выплаты денежных средств.

                    </p>
                    <p>Сотрудники компании консультируют лизингополучателей по правовым вопросам заключения сделки, по бухгалтерскому учету операций и прочим
                        вопросам.</p>
                </div>
            </div>

            <div className="requestForm">
                <EmailForm sitePage="О компании" buttonTitle="Получить консультацию" additionalInfo="contacts"/>
            </div>
        </div>
    );
}

export default About;