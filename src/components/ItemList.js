import React from 'react'
import { ItemDespesa,NameDespesa ,ValueDespesa ,CreationDate,ButtonItem,WebButtons,ButtonMobile} from '../styles/despesas'
import { BsFillPencilFill ,BsXLg} from "react-icons/bs";
const ItemList = ({item,remove}) => {
  const moment = require('moment');
  let formated_date = moment(item.created_at).format('YYYY-MM-DD');
  return (
    <>
    <ItemDespesa>
      <NameDespesa>{item.name}</NameDespesa>
      <ValueDespesa>{item.value}</ValueDespesa>
      <CreationDate>{formated_date}</CreationDate>

      <WebButtons>
        <ButtonItem color = "red" onClick = {() => remove(item._id)}>DELETAR</ButtonItem>
        <ButtonItem color = "#836FFF">EDITAR</ButtonItem>  
      </WebButtons>

      <ButtonMobile onClick = {() => remove(item._id)}><BsXLg/></ButtonMobile>
      <ButtonMobile><BsFillPencilFill/></ButtonMobile>
    </ItemDespesa>
    </>

  )
}

export default ItemList