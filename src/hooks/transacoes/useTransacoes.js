import React from 'react'
import userControlEntradas from '../../services/entradas';
import useFormRegister from '../useFormRegister';
const useTransacoes = () => {
    let nameEntrada = useFormRegister();
    let valueEntrada = useFormRegister();
    let [dadosDespesas,setDadosDespesas] = React.useState([])
    const id = localStorage.getItem("user")
    let editNameEntrada = useFormRegister();
    let editValueEntrada = useFormRegister()
    let [valueIdEntrada,setIdEntrada] = React.useState()
    let [modal,setModal] = React.useState(false)
  
    async function fetch(){
      const dados = await userControlEntradas.findEntradas(id)
      setDadosDespesas(dados)
    }
      
    React.useEffect(()=> {
        fetch()
    },[])
  
  
    const Add = async () => {
      const userEntrada = localStorage.getItem("user")
  
      const dados = {
          name : nameEntrada.value,
          value : valueEntrada.value,
          userEntrada : userEntrada
      }
      try{
          const despesa = await userControlEntradas.register(dados)
          fetch()
      }catch(error){}
   }
   const Remove = async(id) =>{
    try{
        const entradas = await userControlEntradas.remove(id)
        fetch()
    }catch(error){}
 }

 const getIdItem = (despesa) =>{
    setModal(true)
    setIdEntrada(despesa._id)
  }
  
  const EditSubmit = async () =>{
    const dados = {
      name : editNameEntrada.value,
      value : editValueEntrada.value,
    }
    if(editNameEntrada.value != "" && editValueEntrada.value != ""){
      try{
        const entrada = await userControlEntradas.put(valueIdEntrada,dados)
      }catch(error){console.log("erro")}
    }else{
      alert("preencha os dados")
    }
   
  }
  
    return {nameEntrada,valueEntrada,Add,fetch,dadosDespesas,Remove,editNameEntrada,editValueEntrada,getIdItem,EditSubmit,modal,setModal}
}

export default useTransacoes