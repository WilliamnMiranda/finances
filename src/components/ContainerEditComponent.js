import React from 'react'
import {ContainerFormulario,InputName,InputPrice,ButtonDespesas,ContainerEdit,Closed} from '../styles/despesas'
import useDespesas from '../hooks/despesas/useDespesas'
const ContainerEditComponent = () => {
  let {nameDespesa,valueDespesa,Add} = useDespesas()
  return (
    <ContainerEdit>
      <Closed>x</Closed>
      <ContainerFormulario onSubmit = {Add}>
        <InputName required value = {nameDespesa.value} type="text" name = "nameDespesa" placeholder="Name" onChange = {({target}) => nameDespesa.setValues(target.value)}></InputName>
        <InputPrice required value = {valueDespesa.value} type="text" name = "valueDespesa" placeholder="Value" onChange = {({target}) => valueDespesa.setValues(target.value)}></InputPrice>
        <ButtonDespesas>ADICIONAR</ButtonDespesas>
      </ContainerFormulario>
    </ContainerEdit>
  )
}

export default ContainerEditComponent