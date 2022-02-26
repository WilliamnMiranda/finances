import React from 'react'
import {BrowserRouter,} from "react-router-dom";
import Logado from "../views/Logado";
import Login from '../views/Login'
import  {GlobalContext} from '../hooks/userProvider'
const Main = () => {
    const {logado,setLogado} = React.useContext(GlobalContext)
    console.log(logado)
    return (
      <BrowserRouter>
            {logado ? <Logado/>:<Login/>}
      </BrowserRouter> 
    );


}

export default Main