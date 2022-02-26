const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/Finances' , {useNewUrlParser : true, useUnifiedTopology : true}).then(() => console.log("Conectado ao mongo")).catch((err) => console.error(err))