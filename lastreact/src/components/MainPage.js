import React from "react";
import Footer from "./Footer";
import Post from "./PostXZ";
import Header from "./Header";
import {motion} from "framer-motion";

class MainPage extends React.Component {
    render() {
        return (
            <div id="main">
                <Header/>
                <motion.div className="container my-5"  animate={{ x: -700 }} transition={{ duration: 5.5 }}>
                    <motion.div className="container my-5"  animate={{ x: 700 }} transition={{ duration: 3.5 }}>
                        <center id="NamePage" className="textZag">Главная</center>
                    </motion.div>
                </motion.div>
                <div className="cards">
                    <Post id={1}/>
                    <Post id={2}/>
                    <Post id={3}/>
                    <Post id={4}/>
                    <Post id={5}/>
                    <Post id={6}/>
                    <Post id={7}/>
                    <Post id={8}/>
                    <Post id={9}/>
                    <Post id={10}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default MainPage