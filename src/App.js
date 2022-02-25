import React from "react";
import Logado from "./views/Logado";
import Login from './views/Login'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [logado,setLogado]  = React.useState(false);
  
  React.useEffect(()=> {
    const acess = localStorage.getItem('user')
    acess ? setLogado(true) : alert("Voce precisa fazer login")
  },[])

  return (
    <BrowserRouter>
      {  logado ? <Logado/> : <Login/>}
    </BrowserRouter> 
  );
}

export default App;
