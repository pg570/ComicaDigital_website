const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 5000;
const dbConnect = require("./config/db");

const app = express();
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("hello"));

app.listen(PORT, async() => {
  await dbConnect();
  console.log(`server listening at PORT : http://localhost:${PORT}`);
});
