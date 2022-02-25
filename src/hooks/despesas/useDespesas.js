import React from 'react'
import userControlDespesa from '../../services/despesa';
import useFormRegister from '../useFormRegister';
const useDespesas = () => {
  let nameDespesa = useFormRegister();
  let valueDespesa = useFormRegister();
  let [dadosDespesas,setDadosDespesas] = React.useState([])
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

  const Add = async () => {
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
  
  
  return {nameDespesa,valueDespesa,Add,Remove,fetch,dadosDespesas}
}

export default useDespesas