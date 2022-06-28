const {
  create,
  getUserByUserId,
  getUserByUserEmail,
  updateUser,
  deleteUser,
  getUser,
} = require("./user.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createUser: (req, res) => {
    const body = {
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      gender: req.body.gender,
      password: req.body.password,
    };
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      // if (body.name.length > 0) {
      //   //console.log(err);
      //   return res.status(500).json({
      //     success: 0,
      //     message: "Name already exists",
      //   });
      // }
      // if (body.password.length > 0) {
      //   //console.log(err);
      //   return res.status(500).json({
      //     success: 0,
      //     message: "Password already exists",
      //   });
      // }
      // if (body.phoneNumber.length > 0) {
      //   //console.log(err);
      //   return res.status(500).json({
      //     success: 0,
      //     message: "Phonenumber already exists",
      //   });
      // }
      else {
        return res.status(200).json({
          success: 1,
          message: "signup successfully",
          data: body,
        });
      }
    });
  },
  login: (req, res) => {
    const body = req.body;
    getUserByUserEmail(body.email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.status(500).json({
          success: 0,
          message: "Invalid email or password",
        });
      }
      const result = compareSync(body.password, results.password);
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, process.env.JWT_KEY, {
          expiresIn: "1h",
        });
        return res.status(200).json({
          success: 1,
          message: "login successfully",
          data: results,
          token: jsontoken,
        });
      } else {
        return res.status(500).json({
          success: 0,
          message: "Invalid email or password",
        });
      }
    });
  },
  getUsersByUserId: (req, res) => {
    const id = req.params.id;
    getUserByUserId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }
      results.password = undefined;
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getUsers: (req, res) => {
    getUser((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateUsers: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return false;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update user",
        });
      }
      return res.json({
        success: 1,
        message: "updated successfully",
      });
    });
  },
  deleteUsers: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      } else if (!results) {
        return res.status(500).json({
          success: 0,
          message: "Record Not Found",
        });
      }
      return res.json({
        success: 1,
        message: "user deleted successfully",
      });
    });
  },
};
