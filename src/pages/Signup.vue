<template>
  <div class="row">
    <div
      class="col-md-6 offset-md-3 shadow p-3 mb-5 mt-5 bg-body rounded login"
    >
      <div>
        <div>
          <h3>Signup</h3>
          <hr />
        </div>
        <form action="" @submit.prevent="onSignup()">
          <div class="form-group">
            <label for="">Name:</label>
            <input
              type="text"
              class="form-control"
              placeholder="John Doe"
              v-model="name"
            />
            <div class="error" v-if="errors.name">
              {{ errors.name }}
            </div>
          </div>
          <div class="form-group">
            <label for="">Email:</label>
            <input
              type="text"
              class="form-control"
              placeholder="johndoe@gmail.com"
              v-model.trim="email"
            />
            <div class="error" v-if="errors.email">
              {{ errors.email }}
            </div>
          </div>
          <div class="form-group">
            <label for="">Phone Number:</label>
            <input
              type="tel"
              class="form-control"
              placeholder="(+234) 806 332 3914"
              v-model="phoneNumber"
            />
            <div class="error" v-if="errors.phoneNumber">
              {{ errors.phoneNumber }}
            </div>
          </div>
          <div class="form-group">
            <label for="">Gender:</label>
            <select class="form-select" v-model="gender">
              <option disabled hidden value>Please select a gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
            <div class="error" v-if="errors.gender">
              {{ errors.gender }}
            </div>
          </div>

          <div class="form-group mt-2">
            <label for="">Password:</label>
            <input
              type="password"
              class="form-control"
              placeholder="******"
              v-model="password"
            />
            <div class="error" v-if="errors.password">
              {{ errors.password }}
            </div>
          </div>
          <div class="form-group">
            <label for="">Confirm Password:</label>
            <input
              type="password"
              class="form-control"
              placeholder="******"
              v-model="confirm_password"
            />
            <div class="error" v-if="errors.confirm_password">
              {{ errors.confirm_password }}
            </div>
          </div>

          <div class="my-3">
            <button
              type="submit"
              class="btn btn-secondary"
              style="--bs-btn-padding-y: 0.5rem; --bs-btn-padding-x: 3rem"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import SignupValidations from "../services/SignupValidations";
export default {
  data() {
    return {
      name: "",
      email: "",
      phoneNumber: "",
      gender: "",
      password: "",
      confirm_password: "",
      //selected: "Please select a gender",
      errors: [],
    };
  },
  methods: {
    onSignup() {
      //check the validations
      let validations = new SignupValidations(
        this.name,
        this.email,
        this.gender,
        this.phoneNumber,
        //this.selected,
        this.password,
        this.confirm_password
      );
      this.errors = validations.checkValidations();
      if (this.errors.length) {
        return false;
      }
    },
  },
};
</script>

<style>
.signup {
  background: #f8f9fa !important;
}
.error {
  color: red;
  font-size: 14px;
  padding-top: 10px;
}
</style>
