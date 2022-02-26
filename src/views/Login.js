import React from 'react'
import FormRegister from '../components/FormRegister';
import GlobalStyle from "../styles/globalStyle";
import {ContainerGeral,ContainerLogin,FotoLogin}from '../styles/styleRegister'
const Login = () => {
  
  return (
      <>
        <GlobalStyle/>
        <ContainerGeral>
            <ContainerLogin>
                <FotoLogin></FotoLogin>
                    <FormRegister/>
            </ContainerLogin>
        </ContainerGeral>
      </>
      )
}

export default Login