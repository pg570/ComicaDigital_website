const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String , required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String }
});

const users = mongoose.model("user", userSchema);

module.exports = users;
// "title": "Samsung Galaxy Watch4 R870N Smart Watch 44mm, Silver",
//   "img": "https://www.reliancedigital.in/medias/Samsung-R870N-44mm-GalaxyWatch4-491997613-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTM0Mzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGUwL2g3ZC85NzUxNjYwNjI1OTUwLmpwZ3wxY2QxYTM4ZjE0MGI3OGJlNDFlMWFkNjY4OGM5MGNiZWM2MTI4MDg0Y2Q1OWU1NDhmMjFkZWM1ZjkwOWM3YTI2",
//   "rating": 5,
//   "price": 26999,
//   "offer_price": 27999,
//   "mrp": 29999,
//   "category": "watches",
//   "brand": "samsung",
//   "wishlist": false