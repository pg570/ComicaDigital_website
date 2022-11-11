const mongoose = require('mongoose');
const connect = ()=>{
    return mongoose.connect("mongodb+srv://pg570:Pgiri570@cluster0.2tw3cl1.mongodb.net/?retryWrites=true&w=majority");
}

module.exports = connect