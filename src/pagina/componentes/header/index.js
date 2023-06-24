import React from "react";
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.png'
import './style.css';

function index () {
    return(
        <header>
            <img src={Logo} alt="logo-loja" title="Logo" />
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/Sabor">SABORES</Link>
                <Link to="/Sobre">SOBRE</Link>
            </nav>
        </header>
    );
}
export default index;