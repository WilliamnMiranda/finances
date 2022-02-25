const Mongoose  = require("mongoose")


const userSchema =  new Mongoose.Schema({
    name : {type: String , required : true},
    email : {type : String , required  : true ,unique :true},
    password : {type : String , required  : true},
    id : {type : Number , required : true , unique : true },
    created_at : {type : Date , default : Date.now},
    updated_at : {type : Date , default : Date.now}
})

module.exports = Mongoose.model('User',userSchema)