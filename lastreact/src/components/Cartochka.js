import React from 'react';
import { motion } from 'framer-motion';
const addToCart = (UnitId) => {
    fetch("http://localhost:3000/unitazs/" + UnitId)
        .then(res => res.json())
        .then(unit => {
            fetch("http://localhost:3000/carzina", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(unit)
            })
                .then(res => {
                    fetch("http://localhost:3000/carzina")
                        .then(res => res.json())
                });
        });
  };

const addToFavourite = (UnitId) => {
    fetch("http://localhost:3000/unitazs/" + UnitId)
        .then(res => res.json())
        .then(unit => {
            fetch("http://localhost:3000/favourite", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(unit)
            })
                .then(res => {
                    fetch("http://localhost:3000/favourite")
                        .then(res => res.json())
                });
        });
  };

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 2 }
};


const ProductCard = ({ product }) => {
  return (
   <motion.div className="card"  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <img src={"../img/" + product.picture} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h1 className="card-title">{product.name}</h1>
          <h6 className="card-text">Цена: {product.price}</h6>
          <div className="cards">
            <div>
              <button onClick={() => addToCart(product.id)} className="btn btn-primary">В корзину</button>
            </div>
            <div>
              <button onClick={() => addToFavourite(product.id)} className="btn btn-primary"> Избранное</button>
            </div>
          </div>
        </div>
   </motion.div>
  );
};

export default ProductCard;
