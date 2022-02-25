import React from 'react'
import { ContainerItemFinally,NameDespesa ,ValueDespesa ,CreationDate} from '../styles/PaginaInicial'
const ItemFinally = ({item}) => {
    const moment = require('moment');
    var formated_date = moment(item.created_at).format('YYYY-MM-DD');
  return (
    <ContainerItemFinally>
      <NameDespesa>{item.name}</NameDespesa>
      <ValueDespesa>{item.value}</ValueDespesa>
      <CreationDate>{formated_date}</CreationDate>
    </ContainerItemFinally>
  )
}

export default ItemFinally