import React from 'react'
import userControlMeta from '../../services/metas';
import useFormRegister from '../useFormRegister';
const useDespesas = () => {
  let nameMeta = useFormRegister();
  let valueMeta = useFormRegister();
  let [dadosMeta,setDadosMetas] = React.useState([])
  const id = localStorage.getItem("user")

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
  
  
  return {nameMeta,valueMeta,Add,Remove,fetch,dadosMeta,setDadosMetas}
}

export default useDespesas