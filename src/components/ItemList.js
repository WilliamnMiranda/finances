import React from 'react'
import { ItemDespesa,NameDespesa ,ValueDespesa ,CreationDate,ButtonItem,WebButtons,ButtonMobile,IconTypeList} from '../styles/despesas'
import { BsFillPencilFill ,BsXLg} from "react-icons/bs";
import { BsArrowDown ,BsArrowUp ,BsArrowRight} from "react-icons/bs"
const ItemList = ({item,remove,getIdItem,type,meta}) => {
  const moment = require('moment');
  let formated_date = moment(item.created_at).format('DD/MM/YYYY');
  const name = item.name[0].toUpperCase() + item.name.substr(1);
  return (
    <>
    <ItemDespesa>
      {meta === true ? <BsArrowRight/> :  <IconTypeList type = {type} >{type ? <div> <BsArrowDown/> </div> : <div><BsArrowUp/></div>} </IconTypeList>
}
      <NameDespesa>{name}</NameDespesa>
      <ValueDespesa>R$   {item.value}</ValueDespesa>
      <CreationDate>{formated_date}</CreationDate>

      <WebButtons>
        <ButtonItem color = "red" onClick = {() => remove(item._id)}>DELETAR</ButtonItem>
        <ButtonItem color = "#836FFF" onClick = {()=> getIdItem(item)}>EDITAR</ButtonItem>  
      </WebButtons>

      <ButtonMobile onClick = {() => remove(item._id)}><BsXLg/></ButtonMobile>
      <ButtonMobile onClick = {()=> getIdItem(item)}><BsFillPencilFill/></ButtonMobile>
    </ItemDespesa>
    </>

  )
}

export default ItemList