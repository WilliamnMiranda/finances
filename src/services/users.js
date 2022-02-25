import Api from '../services/Api'
const userServices = {
    register : (params) => {
        Api.post('/users/register',params)
    },
    login : async ({email,password}) => {
        const {data} =  await Api.get("/users/login")
        const user = data.find((user)=>{
            if(user.password === password && user.email === email) {
                return user
            }
            else {
                return false
            }
        })
        return user
    }
}

export default userServices