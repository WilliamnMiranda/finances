const axios = require("axios")

const Api = axios.create({baseURL:"https://git.heroku.com/api-project-finances.git"})

export default Api