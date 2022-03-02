import React from 'react';
import {ContainerInfos, ContainerFormulario,InputName,InputPrice,ButtonDespesas,ContainerLista,ContainerEdit,Closed,ContainerFormularioEdit,HeaderClose} from '../styles/despesas'
import ItemList from '../components/ItemList'
import useDespesas from '../hooks/despesas/useDespesas'
const Despesas = () => {
  let {nameDespesa,valueDespesa,Add,Remove,fetch,dadosDespesas,modal,setModal,editValueDespesa,editNameDespesa,getIdItem,EditSubmit} = useDespesas()
  return (
  <>
  {modal && (
  <ContainerEdit>
      <ContainerFormularioEdit onSubmit = {EditSubmit}>
            <HeaderClose>
              <h4>MODIFICAR</h4>
              <Closed><div onClick = {()=> setModal(false)}>X</div></Closed>
            </HeaderClose>
            <InputName   value = {editNameDespesa.value} type="text" name = "nameDespesa" placeholder="Name" onChange = {({target}) => editNameDespesa.setValues(target.value)}></InputName>
            <InputPrice  value = {editValueDespesa.value} type="text" name = "valueDespesa" placeholder="Value" onChange = {({target}) => editValueDespesa.setValues(target.value)}></InputPrice>
            <ButtonDespesas>Alterar</ButtonDespesas>
      </ContainerFormularioEdit>
  </ContainerEdit>
  )}
    
  <ContainerInfos>

      <ContainerFormulario onSubmit = {Add}>
        <InputName  value = {nameDespesa.value} type="text" name = "nameDespesa" placeholder="Name" onChange = {({target}) => nameDespesa.setValues(target.value)}></InputName>
        <InputPrice value = {valueDespesa.value} type="text" name = "valueDespesa" placeholder="Value" onChange = {({target}) => valueDespesa.setValues(target.value)}></InputPrice>
        <ButtonDespesas>ADICIONAR</ButtonDespesas>
      </ContainerFormulario>
      
      <ContainerLista>
          {dadosDespesas && dadosDespesas.map((item,index) => <ItemList type = {true} key = {index} item = {item} remove = {Remove} setModal = {setModal}fetch = {fetch} getIdItem = {getIdItem}/>)}
      </ContainerLista>

  </ContainerInfos>
  
  </>
  )
};

export default Despesas;
