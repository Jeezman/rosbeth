"use strict";
exports.__esModule = true;
require("dotenv").config();
var express_1 = require("express");
var app = (0, express_1["default"])();
var userRouter = require("./api/users/user.router");
// const knex = require("./database/db.js");
//initialize knex
// const knex = require("knex")({
//   client: "mysql2",
//   connection: {
//     user: "root",
//     password: "password",
//     database: "rosbeth",
//   },
// });
// app.get("/", (req, res) => {
//   // res.send("Hello World!");
//   res.json({
//     success: 1,
//     message: "Hello World!",
//   });
// });
// app.get("/users", async (req, res) => {
//   const result = await knex.select("username").from("users");
//   res.json({
//     users: result,
//   });
//   console.log(result);
// });
app.use(express_1["default"].json());
app.use("/api/users", userRouter);
app.listen(process.env.APP_PORT, function () {
    return console.log("Server running on port: ", process.env.APP_PORT);
});
