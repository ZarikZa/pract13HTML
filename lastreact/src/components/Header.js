import React from "react";
import { Link } from 'react-router-dom';
class Header extends React.Component{
    render() {
        return(
            <div className="header" style={{background: "#c9e6ec", color: "#1F273D"}}>
                <header className="d-flex justify-content-center py-3">
                  <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/main" id="link" className="nav-link" aria-current="page">Главная</Link></li>
                    <li className="nav-item"><Link to="/catalog" id="link" className="nav-link">Каталог</Link></li>
                    <li className="nav-item"><Link to="/favourite" id="link" className="nav-link">Избранное</Link></li>
                    <li className="nav-item"><Link to="/carzina" id="link" className="nav-link">Корзина</Link></li>
                  </ul>
                </header>
            </div>
        )
    }
}

export default Header
