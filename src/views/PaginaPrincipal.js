import React from 'react';
import {ContainerPaginaInicial,ContainerInfosGerais,ContainerUltimasTransacoes,ContainerFinnalyInfos,ContainerOutrasInfos,ContainerMetas,IconInicial,
ContainerType,InfoTotais,ContainerValue,ButtonRedirect} from '../styles/PaginaInicial';
import userControlDespesa from '../services/despesa';
import userControlEntrada from '../services/entradas';
import { BsArrowDown ,BsArrowUp ,BsArrowRight , BsArrowLeft } from "react-icons/bs";
import ItemFinally from '../components/ItemFinally';
import userControlMetas from '../services/metas'
import { useNavigate } from 'react-router-dom';
const PaginaPrincipal = () => {
  const navigate = useNavigate()
  const id = localStorage.getItem("user")
  let [valueDespesa,setDespesas] = React.useState(null);
  let [valueEntradas,setEntradas] = React.useState(null);
  let [valueMetas,setMetas] = React.useState(null)
  let [valueCarteira,setCarteira] = React.useState(null)
  let [randomDespesa,setRandomDespesas] = React.useState([]);
  let [randomEntradas,setRandomEntradas] = React.useState([]);


  async function getTotalMetas(){
    const metasTotal = await userControlMetas.findTotalMetas(id)
    setMetas(metasTotal[metasTotal.length - 1])
  }
  async function getTotalDespesas(){
    const despesasTotal = await userControlDespesa.findTotalDespesa(id)
    setDespesas(despesasTotal[despesasTotal.length - 1])
  }
  async function getTotalEntradas(){
    const entradasTotal = await userControlEntrada.findTotalEntradas(id)
    setEntradas(entradasTotal[entradasTotal.length - 1])
  }

  async function getRandomList(){
    const despesas = await userControlDespesa.findLimitDespesa(id)
    setRandomDespesas(despesas)
    const entradas = await userControlEntrada.findLimitEntrada(id)
    setRandomEntradas(entradas)
  }
  
  React.useEffect(()=>{
    getTotalDespesas()
    getTotalEntradas()
    getRandomList()
    getTotalMetas()
  },[])
  return(
    <ContainerPaginaInicial>
      <ContainerInfosGerais>
        <InfoTotais>
            <ContainerType>
              <IconInicial color = {"green"}><BsArrowUp/></IconInicial>
              <p>Entradas</p>
            </ContainerType>

            <ContainerValue>
                <div>R$ {valueEntradas == null && "  0"} {valueEntradas && valueEntradas} </div>
            </ContainerValue>
        </InfoTotais>

        <InfoTotais>
            <ContainerType>
              <IconInicial color = {"red"}><BsArrowDown/></IconInicial>
              <p>Saidas</p>
            </ContainerType>

            <ContainerValue>
                <div>R$ {valueDespesa == null && "  0"} {valueDespesa && valueDespesa}</div>
            </ContainerValue>
        </InfoTotais>

        <InfoTotais>
            <ContainerType>
              <IconInicial color = {"#00BFFF"}><BsArrowLeft/></IconInicial>
              <p>Carteira</p>
            </ContainerType>

            <ContainerValue>
                <div>R$ {valueCarteira== null && "  0"} {valueCarteira && valueCarteira}</div>
            </ContainerValue>
        </InfoTotais>

        <InfoTotais>
            <ContainerType>
              <IconInicial color = {"black"}><BsArrowRight/></IconInicial>
              <p>Metas</p>
            </ContainerType>

            <ContainerValue>
                <div>R${valueMetas == null && "  0"} {valueMetas && valueMetas}</div>
            </ContainerValue>
        </InfoTotais>

      </ContainerInfosGerais>

      <ContainerUltimasTransacoes> 

        <ContainerFinnalyInfos>
          <h1>Saidas</h1>
          {
           randomDespesa && randomDespesa.map((item,index)=>{
             return <ItemFinally type = {1} key = {index} item = {item}/>
            })
          }
          <ButtonRedirect color = {"#CD5C5C"} onClick = {()=>navigate("/despesas")}>Ver Mais</ButtonRedirect>
        </ContainerFinnalyInfos>
        
        <ContainerFinnalyInfos>
        <h1>Entradas</h1>
          {
           randomEntradas && randomEntradas.map((item,index)=>{
             return <ItemFinally type = {0} key = {index} item = {item}/>
            })
          }
          <ButtonRedirect color = {"#00FA9A"} onClick = {()=>navigate("/entradas")}>ver mais</ButtonRedirect>
        </ContainerFinnalyInfos>
      </ContainerUltimasTransacoes>

      <ContainerOutrasInfos>
        <ContainerMetas></ContainerMetas>
      </ContainerOutrasInfos>

    </ContainerPaginaInicial> 
  );
};

export default PaginaPrincipal;
