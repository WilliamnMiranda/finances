
import React from 'react';
import {Menu,HeaderComponent,ContainerHeader,Logotipo,ListaMenu,ItemMenu,MenuHamburguer} from '../styles/Header';
import { Link , useLocation} from "react-router-dom";

const Header = () => {
const [status,setStatus] = React.useState(false)
let url = useLocation()
React.useEffect(()=>{
  setStatus(false)
},[url])
  return(
      <HeaderComponent>
          <ContainerHeader>
              <Logotipo><Link to = "/"><span>My</span>Finances</Link></Logotipo>
              <Menu>
                  <ListaMenu status = {status}>
                    <ItemMenu>
                      <Link to="/despesas">Despesas</Link>
                    </ItemMenu>
                    <ItemMenu>
                      <Link to="/transacoes">Entradas</Link>
                    </ItemMenu>
                    <ItemMenu>
                      <Link to="/metas">Metas</Link>
                    </ItemMenu>
                  </ListaMenu>

                  <MenuHamburguer onClick = {()=> setStatus(!status)}> - </MenuHamburguer>
              </Menu>
          </ContainerHeader> 
      </HeaderComponent>
  );
};

export default Header;
