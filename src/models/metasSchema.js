const Mongoose = require("mongoose") 

const metaSchema =  new Mongoose.Schema({
    name : {type: String , required : true},
    value : {type : Number , required  : true},
    userMeta : {
        type:String,
        required:true
    },
    created_at : {type : Date , default : Date.now},
    updated_at : {type : Date , default : Date.now}
})

module.exports = Mongoose.model('Meta',metaSchema)