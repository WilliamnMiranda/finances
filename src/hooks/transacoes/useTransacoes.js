import React from 'react'
import userControlEntradas from '../../services/entradas';
import useFormRegister from '../useFormRegister';
const useTransacoes = () => {
    let nameEntrada = useFormRegister();
    let valueEntrada = useFormRegister();
    let [dadosDespesas,setDadosDespesas] = React.useState([])
    const id = localStorage.getItem("user")
  
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
  
    return {nameEntrada,valueEntrada,Add,fetch,dadosDespesas,Remove}
}

export default useTransacoes