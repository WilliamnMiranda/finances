import React from 'react';
import {ContainerInfos, ContainerFormulario,InputName,InputPrice,ButtonDespesas,ContainerLista} from '../styles/despesas'
import ItemList from '../components/ItemList'
import useDespesas from '../hooks/despesas/useDespesas';
const Despesas = () => {
  let {nameDespesa,valueDespesa,Add,Remove,fetch,dadosDespesas} = useDespesas()
  return (
  <ContainerInfos>
      <ContainerFormulario onSubmit = {Add}>
        <InputName value = {nameDespesa.value} type="text" name = "nameDespesa" placeholder="Name" onChange = {({target}) => nameDespesa.setValues(target.value)}></InputName>
        <InputPrice value = {valueDespesa.value} type="text" name = "valueDespesa" placeholder="Value" onChange = {({target}) => valueDespesa.setValues(target.value)}></InputPrice>
        <ButtonDespesas>ADICIONAR</ButtonDespesas>
      </ContainerFormulario>
      
      <ContainerLista>
          {dadosDespesas && dadosDespesas.map((item,index) => <ItemList key = {index} item = {item} remove = {Remove} fetch = {fetch}/>)}
      </ContainerLista>

  </ContainerInfos>
  )
};

export default Despesas;
