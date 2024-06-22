import React, { useState, useEffect } from 'react';
import Cartochka from "./Cartochka";
import Header from "./Header";
import Footer from "./Footer";
import CartochkaFavou from "./CartochkaFavou";
import {motion} from "framer-motion";

const FavouritePage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/favourite')
      .then(res => res.json())
      .then(data => setCart(data));
  }, []);

  return (
      <div>
        <Header/>
        <motion.div className="container my-5"  animate={{ x: -700 }} transition={{ duration: 5.5 }}>
            <motion.div className="container my-5"  animate={{ x: 700 }} transition={{ duration: 3.5 }}>
                <center id="NamePage" className="textZag">Избранное</center>
            </motion.div>
        </motion.div>
          {cart.length === 0 ? (
             <center id="NamePage" className="display-4 fw-bold lh-1 text-body-emphasis">У вас нет избранного</center>
          ) : (
            <div className="cards">
              {cart.map(item => (
                <CartochkaFavou product={item}/>
              ))}
            </div>
          )}
          <Footer/>
      </div>
  );
};

export default FavouritePage;
