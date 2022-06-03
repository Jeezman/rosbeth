import express from "express";
const app = express();
const port = 3000;

//initialize knex
const knex = require("knex")({
  client: "mysql2",
  connection: {
    user: "root",
    password: "password",
    database: "rosbeth",
  },
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/users", async (req, res) => {
  const result = await knex.select("username").from("users");
  res.json({
    users: result,
  });
  console.log(result);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
