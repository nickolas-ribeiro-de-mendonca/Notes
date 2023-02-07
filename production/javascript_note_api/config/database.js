const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", true);

mongoose.connect('mongodb://localhost/javascriptNote',{
   useNewUrlParser: true,
   //useCreateIndex: true,
   useUnifiedTopology: true
}).then(() => console.log('Connection Succesfull')).catch((err) => console.log(err));