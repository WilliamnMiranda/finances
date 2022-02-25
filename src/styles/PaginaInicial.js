import styled from "styled-components";

export  const ContainerPaginaInicial = styled.main`
    width: 100%;
    color:white;
    margin : 0 auto;
    @media(max-width: 800px){
        width: 100%;
    }
`

export  const ContainerInfosGerais = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:30px;
    gap:20px;
    @media(max-width: 800px){
        gap:20px;
        flex-direction: column;
    }
`
export  const InfoTotais = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:#1E1E1E;
    width: 23%;
    height: 170px;
    padding:20px;
    @media(max-width: 800px){
        width: 100%;
        height: 100px;
    }
`
export  const ContainerUltimasTransacoes = styled.section`
    display: flex;
    margin : 30px auto;
    width: 95%;
    height: 420px;
    gap:10px;
    @media(max-width: 800px){
        flex-direction: column;
        width: 100%;
        height: 850px;
    }
`
export  const ContainerFinnalyInfos= styled.nav`
    width:50%;
    background-color: #1E1E1E;
    height: 100%;
    display: flex;
    gap:10px;
    flex-direction: column;
    position: relative;
    @media(max-width: 800px){
        width: 100%;
    }
`
export  const ContainerOutrasInfos = styled.article``

export  const ContainerMetas = styled.article``

export const ContainerType = styled.div`
    display: flex;
    gap:10px;
    align-items: center;
    gap:10px;
    & p{
        font-size: 1.2em;
    }
`

export const IconInicial = styled.div`
background-color : ${({color}) => color};
width: 55px;
height: 55px;
display: flex;
border-radius: 50%;
justify-content: center;
align-items: center;
font-size: 1.9em;
font-weight: bold;
`

export const ContainerItemFinally= styled.li`
    margin:0 auto;
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color:rgba(0,0,0,0.7);
    padding: 10px;
    gap:20px;
    & div {
        font-size: 1.2em;
        font-weight: 400;
        height: 30px;
        display: flex;
        align-items: center;
        
    }
`

export const NameDespesa = styled.div`
    width: 40%;
`
export const ValueDespesa = styled.div`
    width:25%;
`
export const CreationDate = styled.div`
    width: 25%;
`

export const ContainerValue = styled.div`
    & div{
        font-size: 1.6em;
        font-weight: 500;
    }
`

export const ButtonRedirect = styled.button`
        border:none;
        outline: none;
        position: absolute;
        bottom:10px;
        height: 35px;
        width: 100%;
        background-color : ${({color}) => color};
        font-size: 1.3em;
        font-weight: 500;
`