const Mongoose = require("mongoose") 

const entradaSchema =  new Mongoose.Schema({
    name : {type: String , required : true},
    value : {type : Number , required  : true},
    userEntrada : {
        type:String,
        required:true
    },
    created_at : {type : Date , default : Date.now},
    updated_at : {type : Date , default : Date.now}
})

module.exports = Mongoose.model('Entrada',entradaSchema)