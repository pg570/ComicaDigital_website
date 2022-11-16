const express = require("express");
const Addresses = require("./address.model");

const app = express.Router();

app.get("/", async (req, res) => {
  let u = await Addresses.find();
  res.send(u);
});

app.get("/:id", async (req, res) => {
  const id = req.params.id;
  let u = await Addresses.findById(id);
  res.send(u);
});

app.get("/userId/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let addresses = await Addresses.find({ userId: id });
    res.send(addresses);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/", async (req, res) => {
  const { userId, firstname, lastname, address, city, state, pincode, mobile } =
    req.body;
  const addresses = new Addresses({
    userId,
    firstname,
    lastname,
    address,
    city,
    state,
    pincode,
    mobile,
  });
  await addresses.save();
  res.send("Address added!");
});

app.patch("/:id", async (req, res) => {
  try {
    await Addresses.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send("Address updated!");
  } catch (err) {
    res.status(401).send(err.message);
  }
});

app.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    await Addresses.findByIdAndDelete(id);
    res.status(200).send(`Address deleted successfully!`);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = app;
