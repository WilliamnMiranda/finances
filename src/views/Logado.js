import Header from "../components/Header";
import PaginaPrincipal from '../views/PaginaPrincipal'
import Despesas from '../views/Despesas'
import Metas from '../views/Metas'
import Transacoes from '../views/Transacoes'
import React from "react";
import GlobalStyle from "../styles/globalStyle";
import {
  Routes,
  Route
} from "react-router-dom";
const Logado = () => {
  
  return (
    <>
    <GlobalStyle/>
      <Header/>
        <Routes>
            <Route path="/" element={<PaginaPrincipal/>}/>
            <Route path="/despesas" element={<Despesas/>}/>
            <Route path="/metas" element={<Metas/>}/>
            <Route path="/transacoes" element={<Transacoes/>}/>
        </Routes>
  </>  )
}

export default Logado