import React from 'react'
import userControlDespesa from '../../services/despesa';
import useFormRegister from '../useFormRegister';
const useDespesas = () => {
  let nameDespesa = useFormRegister();
  let valueDespesa = useFormRegister();
  let editNameDespesa = useFormRegister();
  let editValueDespesa = useFormRegister()
  let [valueIdDespesa,setIdDespesa] = React.useState()
  let [dadosDespesas,setDadosDespesas] = React.useState([])
  let [modal,setModal] = React.useState(false)
  const id = localStorage.getItem("user")

  async function fetch(){
    const dados = await userControlDespesa.findDespesas(id)
    if(dados){
      setDadosDespesas(dados)
    }
    else{
      setDadosDespesas([])
    }
}
  React.useEffect(()=>{fetch()},[])
  const Add = async function () {
    const userDespesa = localStorage.getItem("user")
    const dados = {
        name : nameDespesa.value,
        value : valueDespesa.value,
        userDespesa : userDespesa
    }
    try{
        const despesa = await userControlDespesa.register(dados)
        fetch()
      }catch(error){}
 }

 const Remove = async(id) =>{
          await userControlDespesa.remove(id)
          fetch()
 }

 const getIdItem = (despesa) =>{
  setModal(true)
  setIdDespesa(despesa._id)
}

const EditSubmit = async () =>{
  const dados = {
    name : editNameDespesa.value,
    value : editValueDespesa.value,
  }
  if(editNameDespesa.value != "" && editValueDespesa.value != ""){
    try{
      const despesa = await userControlDespesa.put(valueIdDespesa,dados)
    }catch(error){console.log("erro")}
  }
  else{
    alert("preencha os dados")
  }
 
}
  
  
  return {nameDespesa,valueDespesa,Add,Remove,fetch,dadosDespesas,editValueDespesa,setModal,modal,editNameDespesa,getIdItem,EditSubmit}
}

export default useDespesas