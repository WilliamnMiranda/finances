const axios = require("axios")

const Api = axios.create({baseURL:'mongodb+srv://williamnm:<will2812>@cluster0.tbjnq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'})

export default Api