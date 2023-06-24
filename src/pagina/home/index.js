import React from "react";
import Topo from '../componentes/header'
import Rodape from '../componentes/footer'
import Img2 from '../componentes/assets/eventos.jpg'
import Banner_sabores from '../componentes/assets/banner-sabores.jpg'
import Banner_sobre from '../componentes/assets/sobre-image.jpg'

import './style.css'



const index = () => {
    return (
        <main>
            
            <Topo />
            <section className="container-logo">
                <div>
                    <h1>SORVETE   ARTESANAL</h1>
                </div>
            </section>
            <section className="container-home">

                <div className="container-sabor">
                    <img src={ Banner_sabores} />
                    <div className="box-sabor">
                        
                        <h2> Nossos produtos</h2>
                        <h3>Novos e deliciosos!</h3>
                        <br/><br/>
                        <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose
                        e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                    </div>
                </div>


                <div className="container-evento">
                   <img src={Img2} alt="foto-evento" title="nossos eventos sempre com os melhores sabores"/>
                    <div className="box-evento">
                        
                        <h2>NOSSOS EVENTOS</h2>
                        <h3>Delicias com sorvete!</h3>
                        <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os
                             melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
                    </div>
                    
                </div>


                <div className="container-equipe">
                    <img src={Banner_sobre} alt="foto-sobre nossa equipe" title="nossa equipe" className="img"/>
                    <div className="box-equipe">
                        <h2>SOBRE NÓS</h2>
                        <h3>Alegria em cada casquinha!</h3>
                        <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não 
                            pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                    </div>
                </div>
            </section>
            <Rodape />
        </main>
    );
}
export default index;