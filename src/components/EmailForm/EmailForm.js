import React, {useState} from 'react';
import {Field, Formik, Form} from "formik";
import * as Yup from 'yup';
import * as axios from "axios";


const EmailForm = ({sitePage, buttonTitle, additionalInfo}) => {

    const formAdditionalInfo = {
        "home": "Наш специалист перезвонит Вам в ближайшее время для предоставления предварительного решения. " +
            "Оставляя заявку, Вы даёте согласие на обработку персональных данных.",
        "contacts": "Наш специалист перезвонит Вам в ближайшее время для предоставления ифнормации по интересующим Вас вопросам. " +
            "Оставляя заявку на обратный звонок, Вы даёте согласие на обработку персональных данных.",
    }

    const instance = axios.create({
        baseURL: "https://api.emailjs.com/api/v1.0/email/",
        headers: {'Content-Type': 'application/json'}
    })
    const [validationRequired, setValidationRequired] = useState(false);
    const [emailSended, setEmailSended] = useState(false);
    const [isFetching, setIsFetching] = useState(false)

    const getDataFromForm = async (formData) => {
        setIsFetching(true)
        let data = {
            "service_id": 'gmail',
            "template_id": 'RTL56',
            "user_id": 'user_pBCdFhPRNQ6AchskAg1pq',
            "template_params": {
                'name': formData.name,
                'phone': formData.phone,
                'sitePage': sitePage,
                'buttonTitle': buttonTitle
            }

        }

        let response = await instance.post("send", data)
        if (response.status === 200) {
            setEmailSended(true)
            setIsFetching(false)
        }
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

    if (emailSended) {
        return (
            <div className="emailFormWrapper">
                <div className="responseForm">
                    <h3>Благодарим Вас за обращение!</h3>
                    <p>В ближайшее время с Вами свяжется сотрудник нашей компании.</p>
                    <p>Если этого не произошло, Вы можете обратиться по номеру <b>8 3532 27-07-87</b></p>
                </div>
            </div>
        )
    } else {


        return (

            <div className="emailFormWrapper">
                <div className="requestForm">
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
                                       className={`inputField${errors.name ? " error" : ""}`}
                                       value={values.name}
                                       onChange={handleChange}

                                />
                                {errors.name && <div className="errorMessage">{errors.name}</div>}

                                <Field type="text"
                                       id="phone"
                                       name="phone"
                                       placeholder="Телефон*"
                                       className={`inputField${errors.phone ? " error" : ""}`}
                                       value={values.phone}
                                       onChange={handleChange}

                                />
                                {errors.phone && <div className="errorMessage">{errors.phone}</div>}

                                <div className="button">
                                    <button type="submit" disabled={isFetching} onClick={() => setValidationRequired(true)}><h4>{buttonTitle}</h4></button>
                                </div>
                                <div className="infoText">
                                    <p>{formAdditionalInfo[additionalInfo]}</p>
                                </div>
                            </Form>)
                        }


                    </Formik>
                </div>
            </div>
        )
    }
}

export default EmailForm;