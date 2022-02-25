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
  let [valueDespesa,setDespesas] = React.useState();
  let [valueEntradas,setEntradas] = React.useState();
  let [valueMetas,setMetas] = React.useState()
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
                <div>R$ <span>{valueEntradas && valueEntradas}</span></div>
            </ContainerValue>
        </InfoTotais>

        <InfoTotais>
            <ContainerType>
              <IconInicial color = {"red"}><BsArrowDown/></IconInicial>
              <p>Saidas</p>
            </ContainerType>

            <ContainerValue>
                <div>R$ <span>{valueDespesa && valueDespesa}</span></div>
            </ContainerValue>
        </InfoTotais>

        <InfoTotais>
            <ContainerType>
              <IconInicial color = {"#00BFFF"}><BsArrowLeft/></IconInicial>
              <p>Carteira</p>
            </ContainerType>

            <ContainerValue>
                <div>R$ <span></span></div>
            </ContainerValue>
        </InfoTotais>

        <InfoTotais>
            <ContainerType>
              <IconInicial color = {"black"}><BsArrowRight/></IconInicial>
              <p>Metas</p>
            </ContainerType>

            <ContainerValue>
                <div>R$ <span>{valueMetas && valueMetas}</span></div>
            </ContainerValue>
        </InfoTotais>

      </ContainerInfosGerais>

      <ContainerUltimasTransacoes> 

        <ContainerFinnalyInfos>
          <h1>Entradas</h1>
          {
           randomDespesa && randomDespesa.map((item)=>{
             return <ItemFinally item = {item}/>
            })
          }
          <ButtonRedirect color = {"#00FA9A"} onClick = {()=>navigate("/transacoes")}>Ver Mais</ButtonRedirect>
        </ContainerFinnalyInfos>
        
        <ContainerFinnalyInfos>
        <h1>Entradas</h1>
          {
           randomEntradas && randomEntradas.map((item)=>{
             return <ItemFinally item = {item}/>
            })
          }
          <ButtonRedirect color = {"#CD5C5C"} onClick = {()=>navigate("/despesas")}>ver mais</ButtonRedirect>
        </ContainerFinnalyInfos>
      </ContainerUltimasTransacoes>

      <ContainerOutrasInfos>
        <ContainerMetas></ContainerMetas>
      </ContainerOutrasInfos>

    </ContainerPaginaInicial> 
  );
};

export default PaginaPrincipal;
