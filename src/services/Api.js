const axios = require("axios")

const Api = axios.create({baseURL:"http://localhost:3001"})

export default Api