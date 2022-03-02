import React from 'react';
import {ContainerInfos, ContainerFormulario,InputName,InputPrice,ButtonDespesas,ContainerLista,Closed,ContainerEdit,ContainerFormularioEdit,HeaderClose} from '../styles/despesas'
import ItemList from '../components/ItemList'
import useTransacoes from '../hooks/transacoes/useTransacoes';
const Transacoes = () => {
  let {nameEntrada,valueEntrada,Add,dadosDespesas,Remove,editNameEntrada,editValueEntrada,getIdItem,EditSubmit,modal,setModal} = useTransacoes()

  return (

  <>
    {modal && (
      
      <ContainerEdit>
        <ContainerFormularioEdit onSubmit = {EditSubmit}>
          <HeaderClose>
              <h4>MODIFICAR</h4>
              <Closed><div onClick = {()=> setModal(false)}>X</div></Closed>
          </HeaderClose>             
          <InputName   value = {editNameEntrada.value} type="text" name = "nameDespesa" placeholder="Name" onChange = {({target}) => editNameEntrada.setValues(target.value)}></InputName>
          <InputPrice  value = {editValueEntrada.value} type="text" name = "valueDespesa" placeholder="Value" onChange = {({target}) => editValueEntrada.setValues(target.value)}></InputPrice>
          <ButtonDespesas>Alterar</ButtonDespesas>
        </ContainerFormularioEdit>
    </ContainerEdit>
    )}

    <ContainerInfos>
      <ContainerFormulario onSubmit = {Add}>
        <InputName value = {nameEntrada.value} type="text" name = "nameDespesa" placeholder="Name" onChange = {({target}) => nameEntrada.setValues(target.value)}></InputName>
        <InputPrice value = {valueEntrada.value} type="text" name = "valueDespesa" placeholder="Value" onChange = {({target}) => valueEntrada.setValues(target.value)}></InputPrice>
        <ButtonDespesas>ADICIONAR</ButtonDespesas>
      </ContainerFormulario>
      
      <ContainerLista>
          {dadosDespesas.map((item,index) => <ItemList type = {false} key = {index} item = {item} remove = {Remove} getIdItem ={getIdItem}/>)}
      </ContainerLista>
  </ContainerInfos>
  </>
  )
};

export default Transacoes;
