import Footer from "./Footer";
import Post from "./PostXZ";
import Header from "./Header";
import { motion } from 'framer-motion';
import React, { useState, useEffect } from "react";
import Cartochka from "./Cartochka";

const Poost = () => {
    const [post, setPost] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postUrl = "http://localhost:3000/unitazs/";
                const response = await fetch(postUrl);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        };
        fetchPost();
    }, );

    if (!post) {
        return <div>Загрузка...</div>;
    }

    const filteredPost = searchTerm
        ? post.filter((p) =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : post;

    return (
        <div id="main">
            <Header/>
            <motion.div className="container my-5"  animate={{ x: -700 }} transition={{ duration: 5.5 }}>
                <motion.div className="container my-5"  animate={{ x: 700 }} transition={{ duration: 3.5 }}>
                    <center id="NamePage" className="textZag">Каталог</center>
                </motion.div>
            </motion.div>
           <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="flex-grow-1 d-flex justify-content-center mx-3">
                    <input className="input-search" maxLength={800} autoCorrect="off" autoCapitalize="off" spellCheck="false" placeholder="Какой унитаз??" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                    <button className="btn-search" >
                      Поиск
                    </button>
                  </div>
                </div>
           </div>
            <div className="cards">
                {filteredPost.map((p) => (
                    <Cartochka product={p}/>
                ))
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Poost
