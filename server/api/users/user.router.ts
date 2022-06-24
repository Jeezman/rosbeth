const {
  createUser,
  updateUsers,
  deleteUsers,
  getUsersByUserId,
  getUsers,
  login,
} = require("./user.controller");

// import {
//   createUser,
//   getUsers,
//   getUserByUserId,
//   login,
//   deleteUser,
//   updateUsers,
// } from "./user.controller";
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
router.post("/signup", createUser);
router.get("/", checkToken, getUsers);
router.get("/:id", checkToken, getUsersByUserId);
router.post("/login", login);
router.patch("/", checkToken, updateUsers);
router.delete("/delete", deleteUsers);
module.exports = router;
