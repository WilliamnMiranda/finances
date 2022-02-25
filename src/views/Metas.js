import React from 'react';
import {ContainerInfos, ContainerFormulario,InputName,InputPrice,ButtonDespesas,ContainerLista} from '../styles/despesas'
import useMetas from '../hooks/metas/useMetas'
import ItemList from '../components/ItemList'
const Metas = () => {
  let {nameMeta,valueMeta,Add,Remove,dadosMeta} = useMetas()
  return (
  <ContainerInfos>
    <ContainerFormulario onSubmit = {Add}>
      <InputName value = {nameMeta.value} type="text" name = "nameDespesa" placeholder="Name" onChange = {({target}) => nameMeta.setValues(target.value)}></InputName>
      <InputPrice value = {valueMeta.value} type="text" name = "valueDespesa" placeholder="Value" onChange = {({target}) => valueMeta.setValues(target.value)}></InputPrice>
      <ButtonDespesas>ADICIONAR</ButtonDespesas>
    </ContainerFormulario>
    
    <ContainerLista>
        {dadosMeta.map((item,index) => <ItemList key = {index} item = {item} remove = {Remove}/>)}
  </ContainerLista>

</ContainerInfos>
  );
};

export default Metas;
