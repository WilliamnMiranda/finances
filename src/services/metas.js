import Api from '../services/Api'
const userControlMeta = {
    register : (params) => {
        Api.post('/metas',params)
    },
    findMetas : async (userMeta) => {
        const {data} =  await Api.get(`/metas/${userMeta}`)
        return data
    },
    findTotalMetas : async (userMeta) => {
        let contador = 0
        const {data} =  await Api.get(`/metas/${userMeta}`)
        const result = data.map((item) => contador += item.value)
        return result
    },
    remove : async (id) =>{
       await Api.delete(`/metas/${id}`)
    }
}

export default userControlMeta