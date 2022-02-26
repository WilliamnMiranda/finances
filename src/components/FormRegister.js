import React from 'react'
import useFormRegister from '../hooks/useFormRegister';
import {ContainerFormulario,InputCreateAccount,ButtonSubmit,ContainerPaginaOffline,ButtonLogin,FooterBack} from '../styles/styleRegister'
import UsersService from '../services/users'
import getRandom from '../services/newId';
import { GlobalContext } from '../hooks/userProvider';
const FormRegister = () => {
    const {logado,setLogado} = React.useContext(GlobalContext)
    let name = useFormRegister();
    let email = useFormRegister();
    let password = useFormRegister();
    let emailLogin = useFormRegister()
    let passwordLogin = useFormRegister()
    let [login,setLogin] = React.useState(false)
    let [register,setRegister] = React.useState(true)
    const Register = async (event) => {
            event.preventDefault()
            const dados = {
                name : name.value,
                email : email.value,
                password : password.value,
                id : Number(getRandom())
            }
            try{
                const user = await UsersService.register(dados)
                localStorage.setItem("user",dados.id)
                setLogado(true)
            }catch(error){
            }
    }

    const Login = async (event) => {
        event.preventDefault()
        const dados = {
            email : emailLogin.value,
            password: passwordLogin.value
        }
        try { 
            const user = await UsersService.login(dados)
            localStorage.setItem("user",user.id)
            setLogado(true)
        }catch{}
    }

    function alter (){
        setRegister(!register)
        setLogin(!login)
    }
    
   
    return (
          <>
            <ContainerPaginaOffline>
               {register  && ( <ContainerFormulario onSubmit = {Register}>
                        <h1>Register</h1>
                        <InputCreateAccount value = {name.value} type="text" name = "nome" placeholder="Name" onChange = {({target}) => name.setValues(target.value)} />
                        <InputCreateAccount value = {email.value} type="Email" name = "email" placeholder="Email" onChange = {({target}) => email.setValues(target.value)} />
                        <InputCreateAccount value = {password.value} type="password" name = "senha" placeholder="Password" onChange = {({target}) => password.setValues(target.value)} />
                        <ButtonSubmit>Registrar</ButtonSubmit>
                </ContainerFormulario>)}

                {login && (<ContainerFormulario onSubmit={Login}>
                        <h1>Login</h1>
                        <InputCreateAccount value = {emailLogin.value} type="Email" name = "email" placeholder="Email" onChange = {({target}) => emailLogin.setValues(target.value)} />
                        {emailLogin.value}
                        <InputCreateAccount value = {passwordLogin.value} type="password" name = "password" placeholder="Password" onChange = {({target}) => passwordLogin.setValues(target.value)} />
                        {passwordLogin.value}
                        <ButtonSubmit>Login</ButtonSubmit>
                        <FooterBack> Ainda nao possui cadastro ? <div onClick = {alter}>Clique aqui e crie sua conta</div> </FooterBack>
                </ContainerFormulario>)}
            </ContainerPaginaOffline>
            {register && (<ButtonLogin>Ja e cadastrado ? <div onClick = {alter}>Clique aqui e faca login</div></ButtonLogin>)}
          </>
        )
}

export default FormRegister
