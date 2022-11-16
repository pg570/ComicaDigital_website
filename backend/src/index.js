const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/db");
const cors = require("cors");

dotenv.config();

const users = require("./features/users/users.route");
const products = require("./features/products/products.route");
const carts = require("./features/cart/cart.route");
const addresses = require("./features/address/address.route");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/api/users", users);
app.use("/api/products", products);
app.use("/api/carts", carts);
app.use("/api/addresses", addresses);

app.use("/api", function (req, res) {
  res.send("Home Page");
});

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`server started on http://localhost:${PORT}`);
});
