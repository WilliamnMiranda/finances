import styled from "styled-components";


export const ContainerGeral = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content:center;
    @media(max-width: 1335px){
        display: block;
    }
`

export const ContainerLogin = styled.section`
    width : 25%;
    height: 40%;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    background-color:rgba(0,0,0,0.3);
    padding-bottom:20px;
    @media(max-width: 1335px){
        width: 100%;
        height: 100%;
    }
    
    `

export const FotoLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:5.0em;
    background-color:#836FFF;
    width: 110px;
    height: 110px;
    color:black;
    border-radius:50%;
    position:absolute;
    top:220px;
    @media(max-width: 1335px){
        top:15px;
        width: 130px;
        height: 130px;
    }
`

export const ContainerFormulario= styled.form`
display: flex;
align-items:center;
gap:10px;
flex-direction:column;
width: 100%;
margin-top:100px;
background-color:inherit;
@media(max-width: 1335px){
        margin-top : 180px;
    }
`

export const InputCreateAccount = styled.input`
    height: 40px;
    width: 90%;
    outline:none;
    border:none;
`

export const ButtonSubmit = styled.button`
    width: 90%;
    height: 50px;
    font-size:1.2em;
    background-color:#836FFF;
    border: none;
    outline: none;
    margin-top:30px;
    color:white;
`

export const ContainerPaginaOffline = styled.div`
width: 100%;
position: relative;
`

export const ButtonLogin = styled.div`
    display: flex;
    margin-top:10px;
    font-size: 1.3em;
    width: 90%;
    & div {
        cursor: pointer;
    }
`

export const ContainerFormularioLogin = styled.div`
    display: flex;
    align-items:center;
    gap:10px;
    flex-direction:column;
    width: 100%;
    margin-top:100px;
    background-color:inherit;
    @media(max-width: 1335px){
            margin-top : 180px;
    }
`

export const FooterBack = styled.article`
  display: flex;
    margin-top:10px;
    font-size: 1.2em;
    width: 90%;
    & div {
        cursor: pointer;
    }
`