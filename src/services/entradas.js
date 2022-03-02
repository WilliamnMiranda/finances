import Api from '../services/Api'
const userControlEntrada = {
    register : (params) => {
        Api.post('/entradas/register',params)
    },
    findEntradas : async (userEntrada) => {
        const {data} =  await Api.get(`/entradas/${userEntrada}`)
        return data
    },
    findTotalEntradas : async (userEntrada) => {
        let contador = 0
        const {data} =  await Api.get(`/entradas/${userEntrada}`)
        const result = data.map((item) => contador += item.value)
        return result
    },
    findLimitEntrada: async (userEntrada) => {
        const {data} =  await Api.get(`/entradas/${userEntrada}/5`)
        return data
    },
    remove : async (id) =>{
        await Api.delete(`/entradas/${id}`)
    },
    put : async (idEntrada,dados) =>{
        const newDespesa = await Api.put(`/entradas/${idEntrada}`,dados)
        return newDespesa
    }
}

export default userControlEntrada