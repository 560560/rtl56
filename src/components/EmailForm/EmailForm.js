import React from 'react';
import {Field, Formik} from "formik";
import * as Yup from 'yup';


const EmailForm = (props) => {

    const handleSubmit = (formData) => {
        console.log(JSON.stringify({...formData}, null, 0))

    }


    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Пожалуйста введите свое имя")
            .min(2, "Длина имени не может быть меньше 2 букв"),
        phone: Yup.string()
            .required("Пожалуйста введите контактный номер телефона")
            .min(10, "Длина имени не может быть меньше 10 цифр"),

    })

    let initialValues = {
        name: '',
        phone: ''
    }


    return (
        <div className="emailFormWrapper">

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <div>
                    <form>
                        <input type="text" id="name" name="name" placeholder="Ваше имя*" className="inputField" autoComplete="off"/>
                        <input type="text" id="phone" name="phone" placeholder="Телефон*" className="inputField" autoComplete="off"/>
                        <div className="button"><h4>Оставить заявку</h4></div>
                        <div className="infoText">
                        <p>Наш специалист перезвонит вам в ближайшее время для предоставления предварительного решения. Оставляя заявку, вы даёте согласие на
                            обработку персональных данных.</p>
                        </div>
                    </form>
                </div>
            </Formik>
        </div>
    )
}

export default EmailForm;