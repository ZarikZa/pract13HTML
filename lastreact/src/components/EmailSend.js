import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

     emailjs.sendForm('service_y2s16rc', 'template_g5frfsi', form.current, {
                publicKey: 'GF4FnXcVqPa9PUoct',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
  };

  return (
      <div className="col-md-5 offset-md-1 mb-3">
        <form ref={form} onSubmit={sendEmail}>
          <h5>Свяжитесь с нами</h5>
          <p>Ответим, если будет реализована данная функция(да)</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <input id="newsletter1" type="text" name="user_name" className="form-control" placeholder="Имя"/>
          </div>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <input id="newsletter1" type="email" name="user_email" className="form-control" placeholder="Email адрес"/>
          </div>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <input id="newsletter1" type="text" name="message" className="form-control" placeholder="Сообщение"/>
          </div>
            <button className="btn btn-primary" type="submit" value="Send" >Отправить</button>
        </form>
      </div>
  );
};

export default  ContactUs