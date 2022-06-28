// import Validations from "./Validations";

// export default class SignupValidations {
//   constructor(name, email, password, phoneNumber, gender) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//     this.phoneNumber = phoneNumber;
//     this.gender = gender;
//   }

//   checkValidations() {
//     let errors = [];
//     //name validations
//     if (!Validations.checkName(this.name)) {
//       errors["name"] = "Invalid Name!";
//     }
//     //email validations
//     if (!Validations.checkEmail(this.email)) {
//       errors["email"] = "Invalid Email!";
//     }

//     //password Validations
//     if (!Validations.minLength(this.password, 6)) {
//       errors["password"] = "password should be of 6 characters";
//     }

//     if (!Validations.checkPhoneNumber(this.phoneNumber)) {
//       errors["phoneNumber"] = "Invalid Phonenumber";
//     }

//     if (!this.name) {
//       errors["name"] = "Name is required!";
//     }
//     if (!this.email) {
//       errors["email"] = "Email is required!";
//     }

//     if (!this.phoneNumber) {
//       errors["phoneNumber"] = "Phonenumber is required!";
//     }

//     if (!this.password) {
//       errors["password"] = "Password is required!";
//     }

//     return errors;
//   }
// }

import Validations from "./Validations";

export default class SignupValidations {
  constructor(name, email, phoneNumber, gender, password, confirm_password) {
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.gender = gender;
    this.password = password;
    this.confirm_password = confirm_password;
  }

  checkValidations() {
    let errors = [];

    //email validations
    if (!Validations.checkEmail(this.email)) {
      errors["email"] = "Invalid Email!";
    }

    //password Validations
    if (!Validations.minLength(this.password, 6)) {
      errors["password"] = "password should be of 6 characters";
    }
    //name Validations
    if (!Validations.checkName(this.name)) {
      errors["name"] = "Invalid Name!";
    }
    //phonenumber Validations
    // if (!Validations.checkPhoneNumber(this.phoneNumber)) {
    //   errors["phoneNumber"] = "Invalid Phonenumber";
    // }
    //gender Validations
    if (!Validations.checkGender(this.gender)) {
      errors["gender"] = "Gender is required";
    }

    if (!this.name) {
      errors["name"] = "Name is required!";
    }
    if (!this.email) {
      errors["email"] = "Email is required!";
    }

    if (!this.phoneNumber) {
      errors["phoneNumber"] = "Phonenumber is required!";
    }

    if (!this.password) {
      errors["password"] = "Password is required!";
    }

    if (this.confirm_password != this.password) {
      errors["confirm_password"] = "Password doesn't match";
    }
    return errors;
  }

  // static getErrorMessageFromCode(errorCode) {
  //   if (errors) {
  //     return "Email already exists";
  //   }
  // }
}
