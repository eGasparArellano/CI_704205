const express = require("express");
const path = require("path");
const app = express();
const userRouter = require("./routes/users.route");

app.use(express.json()); // Middleware pone el json en el req.body
app.use(userRouter);

module.exports = app;