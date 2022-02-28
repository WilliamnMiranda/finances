import React from 'react'
import { ContainerItemFinally,NameDespesa ,ValueDespesa ,CreationDate, IconType} from '../styles/PaginaInicial'
import { BsArrowDown ,BsArrowUp} from "react-icons/bs";
const ItemFinally = ({item , type}) => {
    const moment = require('moment');
    var formated_date = moment(item.created_at).format('YYYY-MM-DD');
  return (
    <ContainerItemFinally>
      <IconType type = {type}>{type ? <div> <BsArrowDown/> </div> : <div><BsArrowUp/></div>} </IconType>
      <NameDespesa>{item.name}</NameDespesa>
      <ValueDespesa>{item.value}</ValueDespesa>
      <CreationDate>{formated_date}</CreationDate>
    </ContainerItemFinally>
  )
}

export default ItemFinally