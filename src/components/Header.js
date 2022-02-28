
import React from 'react';
import {Menu,HeaderComponent,ContainerHeader,Logotipo,ListaMenu,ItemMenu,MenuHamburguer,ButtonLogout} from '../styles/Header';
import {BsList} from "react-icons/bs"
import { Link , useLocation} from "react-router-dom";
import { GlobalContext } from '../hooks/userProvider';
const Header = () => {
const [status,setStatus] = React.useState(false)
  const {setLogado} = React.useContext(GlobalContext)
  const {pathname} = useLocation()
  React.useEffect(()=>{
    setStatus(false)
  },[pathname])

  const logout = ()=>{
      localStorage.removeItem("user")
      setLogado(false)
  }
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
                    <ItemMenu>
                      <ButtonLogout onClick={logout}>SAIR</ButtonLogout>
                    </ItemMenu>
                  </ListaMenu>

                  <MenuHamburguer onClick = {()=> setStatus(!status)}> <BsList/> </MenuHamburguer>
              </Menu>
          </ContainerHeader> 
      </HeaderComponent>
  );
};

export default Header;
