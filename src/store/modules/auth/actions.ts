import { SIGNUP_ACTION, LOGIN_ACTION } from "@/store/storeConstants";
import Axios from "axios";

export default {
  async [SIGNUP_ACTION](_: any, payload: any) {
    let postData = {
      name: payload.name,
      email: payload.email,
      phoneNumber: payload.phoneNumber,
      gender: payload.gender,
      password: payload.password,
    };

    try {
      const response = await Axios.post(
        `http://localhost:8080/api/users/signup`,
        postData

        //   {headers: {

        //     Authorization: 'Bearer ' + token,
        //  }}
      );
      console.log(response);
    } catch (err: any) {
      if (err && err.response && err.response.data) {
        let errorMessage = err.response.data.message;
        //console.log(errorMessage);
        throw errorMessage;
      }
      // if (response && response.data) {
      //   let successMessage = response.data.message;
      //   throw successMessage;
      // }
    }
  },
  async [LOGIN_ACTION](_: any, payload: any) {
    let postData = {
      email: payload.email,
      password: payload.password,
    };
    let response = "";
    try {
      response = await Axios.post(
        `http://localhost:8080/api/users/login`,
        postData
      );
      if (response && response.data) {
        let successMessage = response.data.message;
        console.log(response.data.message);
        throw successMessage;
      }
    } catch (error: any) {
      if (error && error.response && error.response.data) {
        let errorLoginMessage = error.response.data.message;
        //console.log(errorLoginMessage);
        throw errorLoginMessage;
      }
      // if (response) {
      //   let successMessage = response;
      //   console.log(response);
      //   throw successMessage;
      // }
    }
  },
};
