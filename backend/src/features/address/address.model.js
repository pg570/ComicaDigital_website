const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addressSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: Number, required: true, minlength: 6 },
  mobile: { type: Number, required: true, minlength: 10 },
});

const addresses = mongoose.model("address", addressSchema);

module.exports = addresses;
