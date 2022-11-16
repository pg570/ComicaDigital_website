const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    productId:{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true},
    qty : {type:Number, required:true, default : 1}
});

const carts = mongoose.model("cart", cartSchema);

module.exports = carts;