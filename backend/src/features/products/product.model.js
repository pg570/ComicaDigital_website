const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  // _id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: true },
  img: { type: String, required: true },
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
  offer_price: { type: Number, required: true },
  mrp: { type: Number, required: true },
  category: { type: String, required: true },
  brand: { type: String },
  wishlist: { type: Boolean }
});

const products = mongoose.model("product", productSchema);

module.exports = products;
