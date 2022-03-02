import Api from '../services/Api'
const userControlDespesa = {
    register : (params) => {
        Api.post('/despesas',params)
    },
    findDespesas : async (userDespesa) => {
        const {data} =  await Api.get(`/despesas/${userDespesa}`)
        return data
    },
    findTotalDespesa : async (userDespesa) => {
        let contador = 0
        const {data} =  await Api.get(`/despesas/${userDespesa}`)
        const result = data.map((item) => contador += item.value)
        return result
    },
    findLimitDespesa : async (userDespesa) => {
        const {data} =  await Api.get(`/despesas/${userDespesa}/5`)
        return data
    },
    remove : async (id) =>{
       await Api.delete(`/despesas/${id}`)
    },
    put : async (idDespesa,dados) =>{
        const newDespesa = await Api.put(`/despesas/${idDespesa}`,dados)
        return newDespesa
    }
}

export default userControlDespesa