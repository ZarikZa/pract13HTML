import React, {useState, useEffect, useRef} from 'react';
import Cartochka from "./Cartochka";
import Header from "./Header";
import Footer from "./Footer";
import CartochkaCarz from "./CartochkaCarz";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";
import axios from "axios";



const CarzinaPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [cart, setCart] = useState([]);
    const form = useRef();

    const clearCart = async () => {
        try {
            await axios.delete('http://localhost:3000/carzina');
            setCartItems([]);
        } catch (error) {
        console.error('Error clearing cart:', error);
        }
    };

    const sendEmail = (e) => {
      e.preventDefault();
       emailjs.sendForm('service_y2s16rc', 'template_3fgzaxw', form.current, {
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

    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
      const fetchCartItems = async () => {
        try {
          const response = await axios.get('http://localhost:3000/carzina');
          setCartItems(response.data);
        } catch (error) {
          console.error('Error fetching cart items:', error);
        }
      };
      fetchCartItems();
    }, []);

    useEffect(() => {
      const calculateTotal = () => {
        const sum = cartItems.reduce((acc, item) => acc + (item.price), 0);
        setTotalCost(sum);
      };
      calculateTotal();
    }, [cartItems]);

    useEffect(() => {
      fetch('http://localhost:3000/carzina')
        .then(res => res.json())
        .then(data => setCart(data));
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    function toggleCheckbox() {
        const checkbox = document.querySelector('.recaptcha-checkbox');
        checkbox.classList.toggle('checked');
    }

    return (
        <div>
          <Header/>
          <motion.div className="container my-5"  animate={{ x: -700 }} transition={{ duration: 5.5 }}>
              <motion.div className="container my-5"  animate={{ x: 700 }} transition={{ duration: 3.5 }}>
                  <center id="NamePage" style={{}} className="textZag">Корзина</center>
              </motion.div>
          </motion.div>
            {cart.length === 0 ? (
               <center id="NamePage" className="display-4 fw-bold lh-1 text-body-emphasis">Выша корзина пуста</center>
            ) : (
              <div className="cards">
                {cart.map(item => (
                  <CartochkaCarz product={item}/>
                ))}
              </div>
            )}
            <motion.div className="container my-5" >
                <center id="NamePage"  className="textSum">Сумма к оплате: ${totalCost}</center>
            </motion.div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary" onClick={handleOpenModal} type="button">Купить</button>
            </div>
              {isModalOpen && (
                   <form ref={form} onSubmit={sendEmail}>
                      <div className="modal fade show" id="modal-window" style={{display: 'block'}}
                           data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel"
                           aria-hidden="true">
                          <div className="modal-dialog">
                              <div className="modal-content">
                                  <div className="modal-header">
                                      <h5 className="modal-title" id="staticBackdropLabel">Офрмление заказа</h5>
                                      <button type="button" className="btn-close" data-bs-dismiss="modal"
                                              aria-label="Закрыть" onClick={handleCloseModal}></button>
                                  </div>
                                  <div className="modal-body">
                                      <div className="mb-3">
                                          <label htmlFor="recipient-name" className="col-form-label">Ваше ФИО:</label>
                                          <input type="text" name="to_nameSNM" className="form-control"
                                                 id="recipient-name"/>
                                      </div>
                                      <div className="mb-3">
                                          <label htmlFor="recipient-name" className="col-form-label">Адрес
                                              доставки:</label>
                                          <input type="text" name="adres" className="form-control" id="recipient-name"/>
                                      </div>
                                      <div className="col-md-5">
                                          <label htmlFor="country" className="form-label">Способ оплаты</label>
                                          <select name="type_oplati" className="form-select" id="country" required="">
                                              <option>Наличные</option>
                                              <option>По карте</option>
                                          </select>
                                          <div className="invalid-feedback">
                                              Пожалуйста, выберите действующую страну.
                                          </div>
                                      </div>
                                  </div>
                                  <center id="NamePage" name="sumOplati" >Сумма к оплате: ${totalCost}</center>
                                  <div className="recaptcha-container">
                                      <div className="recaptcha-checkbox" onClick={toggleCheckbox}></div>
                                      <div className="recaptcha-label">Я не робот</div>
                                  </div>
                                  <div className="modal-footer">
                                      <input type="submit" value="Send" onClick={clearCart} className="btn btn-outline-primary"
                                             data-bs-dismiss="modal"/>
                                  </div>
                              </div>
                          </div>
                      </div>
                   </form>
              )}
            <Footer/>
        </div>
    );
};

export default CarzinaPage;