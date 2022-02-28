const axios = require("axios")
const Api = axios.create({baseURL:"https://api-finances-project.herokuapp.com"})

export default Api