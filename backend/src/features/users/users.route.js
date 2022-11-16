const express = require("express");
const Users = require("./users.model");
const jwt = require("jsonwebtoken");

const app = express.Router();

app.get("/", async (req, res) => {
  let user = await Users.find();
  res.send(user);
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;

  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).send("Unauthorized");
  }
  try {
    const verification = jwt.verify(token, "SECRET12345");
    console.log("verification",verification);
    const user = await Users.findById(id);
    res.send(user);
  } catch(e) {
    console.log(e.message)
    return res.status(401).send("Token is invalid");
  }
});

app.post("/signUp", async (req, res) => {
  let { email } = req.body;
  try {
    let user = await Users.findOne({ email });
    if (user) {
      return res.status(404).send("User is Already Exists!");
    } else {
      await Users.create(req.body);
      return res.send("Registration Successful!");
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email, password });
  if (!user) {
    return res.send("Invalid Credentials");
  }
  let userId = user._id
  let userEmail = user.email
  let userName = user.firstName+" "+user.lastName
  const token = jwt.sign(
    { id: userId, email: userEmail, age: user.age },
    "SECRET12345",
    {
      expiresIn: "30 day",
    }
  );
  res.send({ message: "Login Success!", userId,userName, userEmail, token });
});

app.post("/logout", (req, res) => {
  try {
    res.clearCookie("token");
    res.send("logout successfully");
  } catch (e) {
    res.status(500).send(e);
  }
});
module.exports = app;
