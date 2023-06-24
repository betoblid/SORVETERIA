import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {scrollreveal} from 'scrollreveal'


/*importando as paginas do projeto para criar a estrutura Router*/
import Home from './pagina/home'
import Sabor from './pagina/sabores'
import Sobre from './pagina/sobre'

/*Criando a estrutura das Routes*/
const App = () => {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sabor" element={<Sabor/>} />     
        <Route path="/sobre" element={<Sobre/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;