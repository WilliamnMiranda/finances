import React from 'react'
import userControlMeta from '../../services/metas';
import useFormRegister from '../useFormRegister';
const useDespesas = () => {
  let nameMeta = useFormRegister();
  let valueMeta = useFormRegister();
  let [dadosMeta,setDadosMetas] = React.useState([])
  const id = localStorage.getItem("user")
  let editNameMeta = useFormRegister();
  let editValueMeta = useFormRegister()
  let [valueIdMeta,setIdMeta] = React.useState()
  let [modal,setModal] = React.useState(false)

  async function fetch(){
    const dados = await userControlMeta.findMetas(id)
    if(dados){
        setDadosMetas(dados)
    }
    else{
        setDadosMetas([])
    }
  }
  React.useEffect(()=>{fetch()},[])

  const Add = async () => {
    const userMeta = localStorage.getItem("user")
    const dados = {
        name : nameMeta.value,
        value : valueMeta.value,
        userMeta : userMeta
    }
    try{
        const meta = await userControlMeta.register(dados)
        fetch()
      }catch(error){}
  }  

  const Remove = async(id) =>{
          await userControlMeta.remove(id)
          fetch()
  }
  
 const getIdItem = (despesa) =>{
   setModal(true)
   setIdMeta(despesa._id)
  }

const EditSubmit = async () =>{
  const dados = {
    name : editNameMeta.value,
    value : editValueMeta.value,
  }
  if(editNameMeta.value != "" && editValueMeta.value != ""){
    try{
      const meta = await userControlMeta.put(valueIdMeta,dados)
    }catch(error){console.log("erro")}
  }else{
    alert("preencha os dados")
  }
 
}
  
  return {nameMeta,valueMeta,Add,Remove,fetch,dadosMeta,setDadosMetas,EditSubmit,modal,editNameMeta,editValueMeta,setModal,getIdItem}
}

export default useDespesas