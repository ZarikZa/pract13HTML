import React from "react";
import { motion } from 'framer-motion';
const DelCart = (UnitId) => {
    fetch("http://localhost:3000/unitazs/" + UnitId)
        .then(res => res.json())
        .then(unit => {
            fetch("http://localhost:3000/carzina/" + UnitId, {
                method: 'DELETE',
            })
                .then(res => {
                    fetch("http://localhost:3000/carzina")
                        .then(res => res.json())
                });
        });
  };

const CartochkaCarz = ({ product }) => {
  return (
   <motion.div className="card"  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
       <img src={"../img/" + product.picture} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h1 className="card-title">{product.name}</h1>
          <h6 className="card-text">Цена: {product.price}</h6>
          <div className="cards">
            <div>
              <button onClick={() => DelCart(product.id)} className="btn btn-primary">Удалить</button>
            </div>
          </div>
        </div>
   </motion.div>
  );
};

export default CartochkaCarz;