import React from "react";
import Topo from '../componentes/header'
import Footer from '../componentes/footer'
import './style.css'

import Banner_sorvete from '../componentes/assets/sorveteria.jpg'
import Banner_sorvete2 from '../componentes/assets/sobre-image.jpg'

const index = () => {
    return (
        <main>
            <Topo />
            <section className="container-galeria">
                <h1>A GELATERIA</h1>
            </section>
            <div className="container-text">
                <h2>Sobre Nós</h2>
                <h4>Nós simplesmente amamos sorvete!</h4>
                <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas
                     para a produção final do sorvete. Vendemos tanto para varejo como para atacado.
                </p>
                <p>nossos clientes podem comprar nossos sorvetes e degusta em nossa loja ou levar para sua residência e aproveitar junto com sua familia. também Vendemos
                    para estabelecimento e criamos eventos como festa de aniversario, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. iremos proporcionar o melhor atendimento e os melhores produtos para você
                    fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                </p>
            </div>
            <img src={Banner_sorvete2} />
            <img src={Banner_sorvete} />

            <Footer />

        </main>
    );
}
export default index;