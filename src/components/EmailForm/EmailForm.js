import React, {useState} from 'react';
import {Field, Formik, Form} from "formik";
import * as Yup from 'yup';
import * as axios from "axios";


const EmailForm = ({sitePage}) => {

    const instance = axios.create({
        baseURL: "https://api.emailjs.com/api/v1.0/email/",
        headers: {'Content-Type': 'application/json'}
    })
    const [validationRequired, setValidationRequired] = useState(false);

    const getDataFromForm = async (formData) => {

        let data = {
            "service_id": 'gmail',
            "template_id": 'RTL56',
            "user_id": 'user_pBCdFhPRNQ6AchskAg1pq',
            "template_params": {
                'name': formData.name,
                'phone': formData.phone,
                'sitePage': sitePage,
            }

        }
        console.log(data)
        let response = await instance.post("send", data)
        console.log(response)
    }


    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Пожалуйста введите свое имя")
            .min(2, "Имя не может быть короче 2 букв")
            .trim("Пожалуйста введите свое имя"),
        phone: Yup.string()
            .required("Пожалуйста введите номер телефона")
            .min(6, "Номер не может быть короче 6 цифр"),

    })

    let initialValues = {
        name: '',
        phone: ''
    }

    return (

        <div className="emailFormWrapper">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                validateOnChange={validationRequired}
                validateOnBlur={validationRequired}
                onSubmit={(values, {resetForm}) => {
                    getDataFromForm(values);
                    resetForm();
                }}>
                {({
                      handleSubmit,
                      handleChange,

                      values,
                      touched,
                      errors,
                  }) => (
                    <Form autoComplete="off" noValidate onSubmit={handleSubmit}>

                        <Field type="text"
                               id="name"
                               name="name"
                               placeholder="Ваше имя*"
                               className={`inputField ${errors.name ? "error" : ""}`}
                               value={values.name}
                               onChange={handleChange}

                        />
                        {errors.name && <div className="errorMessage">{errors.name}</div>}

                        <Field type="text"
                               id="phone"
                               name="phone"
                               placeholder="Телефон*"
                               className={`inputField ${errors.phone ? "error" : ""}`}
                               value={values.phone}
                               onChange={handleChange}

                        />
                        {errors.phone && <div className="errorMessage">{errors.phone}</div>}

                        <div className="button">
                            <button type="submit" onClick={() => setValidationRequired(true)}><h4>Оставить заявку</h4></button>
                        </div>
                        <div className="infoText">
                            <p>Наш специалист перезвонит вам в ближайшее время для предоставления предварительного решения. Оставляя заявку, вы даёте согласие на
                                обработку персональных данных.</p>
                        </div>
                    </Form>)
                }


            </Formik>
        </div>
    )
}

export default EmailForm;