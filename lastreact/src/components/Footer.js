import React, { useRef } from 'react';
import ContactUs from "./EmailSend";

class Footer extends React.Component {
    render() {
        return(
           <div className="footer">
              <footer className="py-5">
                <div className="row">
                  <div className="col-6 col-md-2 mb-3">
                   <p>Данный магазин создан по мотивам 5 лабараторной работы по практе "Магазин унитазов "Овета"</p>
                  </div>
                  <div className="col-6 col-md-2 mb-3">
                   <p>Название магазина происходит от имени "ЕлизОвета" небезизвестной преподавтельницы баз данных</p>
                  </div>
                  <div className="col-6 col-md-2 mb-3">
                   <p>В магазине представлены лучшие унитазы планеты</p>
                  </div>
                  <div className="col-md-5 offset-md-1 mb-3">
                      <ContactUs/>
                  </div>
                </div>
                  <p >© 2024 Овета, Инк.</p>
              </footer>
            </div>
        )
    }
}

export default Footer