import React from 'react'
import FormRegister from '../components/FormRegister';
import GlobalStyle from "../styles/globalStyle";
import {ContainerGeral,ContainerLogin,FotoLogin}from '../styles/styleRegister'
import { BsPersonFill } from "react-icons/bs";
const Login = () => {
  
  return (
      <>
        <GlobalStyle/>
        <ContainerGeral>
            <ContainerLogin>
                <FotoLogin><BsPersonFill/></FotoLogin>
                    <FormRegister/>
            </ContainerLogin>
        </ContainerGeral>
      </>
      )
}

export default Login