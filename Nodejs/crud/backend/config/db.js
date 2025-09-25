const mongoose = require('mongoose');


const connection = mongoose.connect("mongodb://localhost:27017/crud-app-practice")
    .then(() => console.log(`DB connected`))
    .catch((err) => console.log(err))




module.exports = connection;    