const pool = require("../../database/db");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into user_registration(name, email, phoneNumber,gender,password) values (?,?,?,?,?)`,
      [data.name, data.email, data.phoneNumber, data.gender, data.password],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      }
    );
  },
  getUser: (callBack) => {
    pool.query(
      `select id,name,email,phoneNumber,gender,password from user_registration`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUsedId: (id, callBack) => {
    pool.query(
      `select id,name,email,phoneNumber,gender,password from user_registration where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from user_registration where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update user_registration set name=?, email=?,phoneNumber=?, gender=?,  password=?  where id = ?`,
      [
        data.name,
        data.email,
        data.phoneNumber,
        data.gender,
        data.password,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from user_registration where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
