import jwt from "jsonwebtoken";

module.exports = {
  validateRegister: (req, res, next) => {
    // username min length 3
    if (!req.body.name || req.body.name.length < 6) {
      return res.status(400).send({
        msg: "Please enter a username with min. 3 chars",
      });
    }
    if (req.body.email.length > 0) {
      return res.status(400).send({
        msg: "User already exists",
      });
    }
    // password min 6 chars
    if (!req.body.password || req.body.password.length < 6) {
      return res.status(400).send({
        msg: "Please enter a password with min. 6 chars",
      });
    }

    // // password (repeat) does not match
    // if (
    //   !req.body.password_repeat ||
    //   req.body.password != req.body.password_repeat
    // ) {
    //   return res.status(400).send({
    //     msg: "Both passwords must match",
    //   });
    // }

    next();
  },
};
