import React from "react";
import Logo from '../assets/logo.png';
import './style.css'

function index() {
    return (
        <footer>
            <ul type="none">
                <li><img src={Logo} alt="logo-loja" title="logo da loja"/></li>
                <li><h3>ENDEREÇO</h3>
                    <a href="#">Av. Bernardino de Campos, 98</a>
                    <p>São Paulo, SP 12345-678</p>
                </li>
                <li><h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <a href="Tel: (11) 3456-7890">Tel: (11) 3456-7890</a>
                </li>
                <li><h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </li>
            </ul>
            <p className="direitos">Gelateria. Orgulhosamente desenvolvido por <a href="https://www.linkedin.com/in/herbert-souza-220268268/">"Herbert Souza"</a></p>
        </footer>
    );
}
export default index;