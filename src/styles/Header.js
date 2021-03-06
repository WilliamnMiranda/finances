import styled from "styled-components";

export const MenuHamburguer = styled.div`
    display: none;
    @media(max-width: 1335px){
        display: block;
        font-size: 2.1em;
    }
`
export const HeaderComponent = styled.header`
display:flex;
align-items: center;
justify-content: center;
height: 70px;
border-bottom: 1px solid rgba(234,234,234,0.2);
`

export const ContainerHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 95%;
`
export const Logotipo = styled.div`
    font-weight: 700;
    font-size: 2.1em;
    color:#2FDADE;
    && span{
        color:#40C1F5;
    }
`
export const Menu = styled.nav`
display: flex;
`

export const ListaMenu = styled.ul`
display:flex; 
align-items: center;
gap:30px;
@media(max-width: 1335px){
    gap:0px;
    background-color: black;
    display: ${({status}) => status ? "flex" : "none"};
    top:70px;
    left:0px;
    position: absolute;
    width: 100%;
    flex-direction:column;
    padding:25px 0px;
}
`

export const ItemMenu= styled.li`
font-size:1.2em; 
font-weight:600;
@media(max-width: 1335px){
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
    background-color:#1C1C1C;
    height: 40px;
}
`

export const ButtonLogout  = styled.button`
    background-color:#40C1F5;;
    width: 100px;
    outline: none;
    border: none;
    padding:10px;
    @media(max-width: 1335px){
    width: 100%;
}
`
