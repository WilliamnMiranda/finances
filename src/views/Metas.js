import React from 'react';
import {ContainerInfos, ContainerFormulario,InputName,InputPrice,ButtonDespesas,ContainerLista,Closed,ContainerEdit,ContainerFormularioEdit,HeaderClose} from '../styles/despesas'
import useMetas from '../hooks/metas/useMetas'
import ItemList from '../components/ItemList'
const Metas = () => {
  let {nameMeta,valueMeta,Add,Remove,dadosMeta,modal,EditSubmit,editNameMeta,editValueMeta,setModal,getIdItem} = useMetas()
  return (

  <>
  {modal && (
    <ContainerEdit>
     <ContainerFormularioEdit onSubmit = {EditSubmit}>
          <HeaderClose>
              <h4>MODIFICAR</h4>
              <Closed><div onClick = {()=> setModal(false)}>X</div></Closed>
          </HeaderClose>   
        <InputName   value = {editNameMeta.value} type="text" name = "nameDespesa" placeholder="Name" onChange = {({target}) => editNameMeta.setValues(target.value)}></InputName>
        <InputPrice  value = {editValueMeta.value} type="text" name = "valueDespesa" placeholder="Value" onChange = {({target}) => editValueMeta.setValues(target.value)}></InputPrice>
        <ButtonDespesas>Alterar</ButtonDespesas>
      </ContainerFormularioEdit>
    </ContainerEdit>
  )}  

  <ContainerInfos>

      <ContainerFormulario onSubmit = {Add}>
        <InputName value = {nameMeta.value} type="text" name = "nameDespesa" placeholder="Name" onChange = {({target}) => nameMeta.setValues(target.value)}></InputName>
        <InputPrice value = {valueMeta.value} type="text" name = "valueDespesa" placeholder="Value" onChange = {({target}) => valueMeta.setValues(target.value)}></InputPrice>
        <ButtonDespesas>ADICIONAR</ButtonDespesas>
      </ContainerFormulario>

      <ContainerLista>
        {dadosMeta.map((item,index) => <ItemList meta = {true} key = {index} item = {item} remove = {Remove} getIdItem = {getIdItem}/>)}
      </ContainerLista>
      
  </ContainerInfos>
  </>
  );
};

export default Metas;
