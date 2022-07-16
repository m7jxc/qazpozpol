import React from "react";
import { useForm } from "react-hook-form";
import '../css/FeedbackForm.css';

const FeedbackForm = ({ setShow }) => {

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    reset();
  }


  return (
    <div className="form-container">
      <div className="form-content">
        <div className="left-side">
          <div className="phone-details">
            <div className="topic">Phone number</div>
            <div className="text-one">+7 775 672 0505</div>
          </div>
          <div className="email-details">
            <div className="topic">Email</div>
            <div className="text-one">qazmozpol@gmail</div>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Заказать обратный звонок</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-box">
              <input
                type="text"
                id='name'
                placeholder="Ваше имя"
                {...register('Имя', { required: "Поле обязательно к заполнению" })}
              />
            </div>
            <div className="errors">{errors?.Имя?.message}</div>
            <div className="input-box">
              <input
                type="tel"
                id="tel"
                placeholder="Введите телефон"
                {...register('Телефон', { required: "Поле обязательно к заполнению" })}
              />
            </div>
            <div className="errors">{errors?.Телефон?.message}</div>
            <div className="button">
              <input type="submit" value="Отправить" />
            </div>
          </form>
          <button onClick={setShow} className="close-form">Close</button>
        </div>
      </div>
    </div>
  )
}

export default FeedbackForm;