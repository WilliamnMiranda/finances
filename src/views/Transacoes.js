import React from 'react';
import {ContainerInfos, ContainerFormulario,InputName,InputPrice,ButtonDespesas,ContainerLista} from '../styles/despesas'
import ItemList from '../components/ItemList'
import useTransacoes from '../hooks/transacoes/useTransacoes';
const Transacoes = () => {
  let {nameEntrada,valueEntrada,Add,fetch,dadosDespesas,Remove} = useTransacoes()

  return (
    <ContainerInfos>
      <ContainerFormulario onSubmit = {Add}>
        <InputName value = {nameEntrada.value} type="text" name = "nameDespesa" placeholder="Name" onChange = {({target}) => nameEntrada.setValues(target.value)}></InputName>
        <InputPrice value = {valueEntrada.value} type="text" name = "valueDespesa" placeholder="Value" onChange = {({target}) => valueEntrada.setValues(target.value)}></InputPrice>
        <ButtonDespesas>ADICIONAR</ButtonDespesas>
      </ContainerFormulario>
      
      <ContainerLista>
          {dadosDespesas.map((item,index) => <ItemList key = {index} item = {item} remove = {Remove}/>)}
      </ContainerLista>
  </ContainerInfos>
  )
};

export default Transacoes;
