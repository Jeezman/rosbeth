<template>
  <div class="row">
    <div
      class="col-md-6 offset-md-3 shadow p-3 mb-5 mt-5 bg-body rounded login"
    >
      <div>
        <div>
          <h3>Login {{ firstName }}</h3>
          <hr />
        </div>
        <div class="alert alert-danger" v-if="error">{{ error }}</div>
        <div class="alert alert-success" v-if="success">{{ success }}</div>
        <form action="" @submit.prevent="onLogin()">
          <div class="form-group">
            <label for="">Email:</label>
            <input type="text" class="form-control" v-model="email" />
            <div class="error" v-if="errors.email">{{ errors.email }}</div>
          </div>
          <div class="form-group mt-2">
            <label for="">Password:</label>
            <input type="password" class="form-control" v-model="password" />
            <div class="error" v-if="errors.password">
              {{ errors.password }}
            </div>
          </div>

          <div class="my-3">
            <button
              type="submit"
              class="btn btn-secondary"
              style="--bs-btn-padding-y: 0.5rem; --bs-btn-padding-x: 3rem"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import LoginValidations from "../services/LoginValidations";
import { LOGIN_ACTION } from "../store/storeConstants";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      error: "",
    };
  },
  methods: {
    ...mapActions("auth", {
      login: LOGIN_ACTION,
    }),
    onLogin() {
      //check the validations
      let validations = new LoginValidations(this.email, this.password);
      this.errors = validations.checkValidations();
      if ("email" in this.errors || "password" in this.errors) {
        return false;
      }
      this.login({
        email: this.email,
        password: this.password,
      })
      .catch((error) => {
        //console.log("what happening");
        this.error = error;
      });
    },
  },
};
</script>

<style>
.login {
  background: #f8f9fa !important;
}

.error {
  color: red;
  font-size: 14px;
  padding-top: 10px;
}
</style>
