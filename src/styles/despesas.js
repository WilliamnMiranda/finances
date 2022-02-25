import styled from "styled-components";

export const ContainerInfos = styled.section`
    margin : 0 auto;
    min-height: calc(100vh - 70px);
    width: 95%;
    padding:5px;
`

export const ContainerFormulario = styled.form`
    margin: 0 auto;
    width: 90%;
    height: 70px;
    background-color:#1E1E1E;
    padding:10px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap:20px;
    & input {
    padding:5px;
    height: 25px;
    border-radius: 30px;
    outline: none;
    border: none;
    width: 40%;
    }
    @media(max-width: 800px){
    width: 100%;
    flex-direction: column;
    height: auto;

    & input {
        width: 100%;
    }
}
`
export const InputName = styled.input``
export const InputPrice = styled.input``

export const ButtonDespesas = styled.button`
width: 15%;
height: 25px;
border-radius: 30px;
outline: none;
border: none;
@media(max-width: 800px){
   width: 100%;
}
`

export const ContainerLista = styled.nav`
    margin-top: 20px;
    width: 100%;
    background-color: #1E1E1E;
    border-radius: 20px;
    padding:15px 0px;
    height: 82%;
    display: flex;
    flex-direction: column;
    gap:10px;
`

export const ItemDespesa = styled.li`
    margin:0 auto;
    display: flex;
    align-items: center;
    width: 90%;
    height: 60px;
    background-color:rgba(0,0,0,0.7);
    padding: 10px;
    border-radius: 15px;
    gap:20px;
    & div {
        font-weight: 400;
        height: 30px;
        display: flex;
        align-items: center;
        
    }

    @media(max-width: 800px){
        width: 95%;
        gap:5px;
}
`

export const NameDespesa = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    width: 35%;
    @media(max-width: 800px){
        font-size: 0.9em;
}
`
export const ValueDespesa = styled.div`
    width:15%;
`
export const CreationDate = styled.div`
    width: 10%;
    @media(max-width: 800px){
        font-size: 0.9em;
        width: 20%;
}
`

export const ButtonItem = styled.button`
background-color : ${({color}) => color};
outline: none;
border:none;
color:white;
width: 100%;
height: 30px;
@media(max-width: 800px){
        display: none;
}
`

export const WebButtons = styled.div`
    display :flex;
    gap:20px;
    width:  40%;
    @media (max-width: 800px) {
        width: 0px;
        display:none;
    }
`

export const MobileButton = styled.div`
        display: none;

`
export const ButtonMobile= styled.button`
    display: none;
    @media (max-width:800px){
        background-color: transparent;
        outline: none;
        border: none;
        color:white;
        width: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`