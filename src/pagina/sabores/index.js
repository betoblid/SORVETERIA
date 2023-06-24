import React from "react";
import Topo from '../componentes/header'
import Footer from '../componentes/footer'
import './style.css'

import Oreo from '../componentes/assets/sabor-oreo.png'
import Pistache from '../componentes/assets/sabor-pistache.png'
import Morango from '../componentes/assets/sorbet-morango.png'
import Limao from '../componentes/assets/sorbet-limao.png'
import Kiwi from '../componentes/assets/sorbet-kiwi.png'
import Silicia from '../componentes/assets/sabor-cookies-avela.png'


const index = () => {
    return (
        <main>
            <Topo />

            <section className="container-topo2">
                <h1>NOSSOS SABORES</h1>
            </section>
            <section className="container-sabores-text">
                <h2>SABORES DE SORVETE</h2>

                <div className="container-sabores">

                    <div className="box-sabores">
                        <img src={Oreo} title="sorvete de Oreo" alt="sorvete oreo"/>
                        <h4>Sorvete de Oreo</h4>
                        <p>delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>

                    <div className="box-sabores">
                        <img src={Pistache} title="sorvete de pistache" alt="sorvete de pistache"/>
                        <h4>Sorvete de Pistache</h4>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>
                    <div className="box-sabores">
                        <img src={Silicia} title="Sorvete de avelã com Cookies" alte="sorve de avelã"/>
                        <h4>Cookies & Avelã</h4>
                        <p>melhor sorvete. Você vai adorar o sabor.</p>
                    </div>

                    <div className="box-sabores">
                        <img src={Kiwi} title="Sorvete de Kiwi"alt="Sorvete de Kiwi"/>
                        <h4>Sorvete de Kiwi</h4>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>

                    <div className="box-sabores">
                        <img src={Morango} title="Sorve de Morango" alt="Sorvete de Morango"/>
            
                        <h4>Sorvete de Morango</h4>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>
                    <div className="box-sabores">
                        <img src={Limao} title="Sorvete de Limão Siliciano" alt="Sorvete de Limão Siliciano"/>
                        <h4>Sorvete de Limão Siciliano</h4>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
export default index;