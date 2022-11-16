const express = require("express");
const Products = require("./product.model");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    const search = req.query.search || "";
    let sort = req.query.sort || "rating";

    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = "desc";
    }
    let product = await Products.find({
      // title: { $regex: search, $options : "i" },
      category: { $regex: search, $options : "i" }
    }).sort(sortBy);

    res.send(product);
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let product = await Products.findById(id);
    if (!product) {
      res.send("Product not found!");
    }
    res.send(product);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/category/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let product = await Products.find({ category: id });
    res.send(product);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/", async (req, res) => {
  try {
    await Products.create(req.body);
    return res.status(200).send("Product Added!");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.patch("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let product = await Products.findByIdAndUpdate(
      { _id: id },
      { ...req.body }
    );
    res.send("Updated!");
  } catch (e) {
    res.status(500).send(e);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let product = await Products.findByIdAndDelete(id);
    if (!product) {
      res.send("Product not found!");
    }
    res.send("Deleted Successfully!");
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = app;
