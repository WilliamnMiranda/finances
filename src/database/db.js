const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://williamnm:will2812@cluster0.tbjnq.mongodb.net/Cluster0?retryWrites=true&w=majority', {useNewUrlParser : true,useUnifiedTopology : true}).then(() => console.log("Conectado ao mongo")).catch((err) => console.error(err))