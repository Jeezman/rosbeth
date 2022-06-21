export default class Validations {
  static checkEmail(email) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return true;
    }
    return false;
  }

  static minLength(name, minLength) {
    if (name.length < minLength) {
      return false;
    }
    return true;
  }

  static checkName(name) {
    if (/^(?:[-A-Z]+\.? )+[-A-Z]+$/i.test(name)) {
      return true;
    }
    return false;
  }

  static checkPhoneNumber(phoneNumber) {
    if (/^(\+)?234[0-9]*?.*/i.test(phoneNumber)) {
      return true;
    }
    return false;
  }
  static checkGender(gender) {
    if (gender) {
      return true;
    }

    return false;
  }
}
