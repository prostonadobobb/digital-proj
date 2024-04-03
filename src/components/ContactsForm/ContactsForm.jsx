import './ContactsForm.scss';
import palceholder_img from '../../img/placeholder_img.png';
import { Form, FormGroup, FormControl, FormCheck } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import React from 'react';
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';

export const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      number: "",
      email: "",
      service: "",
      message: "",
      agreement: false
    }
  });
  const onSubmit = (data) => {
    console.log(data);
    reset({ ...data })
  }

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        firstName: "",
        number: "",
        email: "",
        service: "",
        message: "",
        agreement: false
      })
    }
  }, [formState, isSubmitSuccessful, reset])

  return (
    <section className="callback">
      <h4 className="callback__title">
        Зв'язатися з нами
      </h4>
      <div className="callback__container">
        <Form className="form" onSubmit={handleSubmit(onSubmit)}>
          <FormGroup className="form__group">
            <FormControl
              id="name"
              placeholder="Ім'я"
              type="text"
              {...register("firstName", {
                required: "Поле обов'язкове",
                minLength: {
                  value: 4,
                  message: "Мінімальна довжина 4"
                }
              })}
            />
            <div className="form__group--text">
              <Form.Text>{errors.firstName?.message}</Form.Text>
            </div>    
          </FormGroup>
  
          <FormGroup className="form__group">
            <FormControl
              id="phone"
              placeholder="Номер телефону"
              type="tel"
              {...register("number", {
                required: "Поле обов'язкове",
                pattern: {
                  value: /^\d+$/,
                  message: "В номері телефону є букви"
                },
                minLength: {
                  value: 10,
                  message: "Мінімальна довжина 10"
                },
                maxLength: {
                  value: 13,
                  message: "Максимальна довжина 13"
                }
              })}
            />
            <div className="form__group--text">
              <Form.Text>{errors.number?.message}</Form.Text>
            </div>
          </FormGroup>
  
          <FormGroup className="form__group">
            <FormControl
              id="email"
              placeholder="E-mail"
              type="email"
              {...register("email", {
                required: "Поле обов'язкове",
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Введіть коректну email адресу"
                }
              })}
            />
            <div className="form__group--text">
              <Form.Text>{errors.email?.message}</Form.Text>
            </div>
          </FormGroup>
  
          <FormGroup className="form__group">
            <Form.Control
              id="service"
              as="select"
              {...register("service", { required: false })}
            >
              <option value="">Оберіть послугу...</option>
              <option value="">Послуга 1</option>
              <option value="">Послуга 2</option>
              <option value="">Послуга 3</option>
              <option value="">Інше</option>
            </Form.Control>
          </FormGroup>
  
          <FormGroup className="form__group">
            <FormControl
              id="message"
              as="textarea"
              placeholder="Введіть повідомлення"
              {...register("message", { required: "Поле обов'язкове" })}
            />
            <div className="form__group--text">
              <Form.Text>{errors.message?.message}</Form.Text>
            </div>
          </FormGroup>
  
          <FormGroup className="form__group">
            <FormCheck
              id="agreement"
              type="checkbox"
              label="Надсилаючи заявку Ви погоджуєтесь з політикою конфіденційності"
              {...register("agreement", {
                required: {
                  value: true,
                  message: "Обов'язково для відправки форми"
                }
              })}
            />
            <div className="form__group--text">
              <Form.Text>{errors.agreement?.message}</Form.Text>
            </div>
          </FormGroup>

          <ButtonSubmit title={"Відпривити"} />
        </Form>
  
        <div className="callback__placeholder">
          <img src={palceholder_img} alt="placeholder_form" />
        </div>
      </div>
    </section>
  );
  
};

