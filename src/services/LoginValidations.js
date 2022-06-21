import Validations from "./Validations";

export default class LoginValidations {
  constructor(email, password) {
    this.email = email;
    this.password = password;
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

    if (!this.email) {
      errors["email"] = "Email is required!";
    }

    if (!this.password) {
      errors["password"] = "Password is required!";
    }

    return errors;
  }
}
