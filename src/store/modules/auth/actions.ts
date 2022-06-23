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

    const response = await Axios.post(
      `http://localhost:8080/api/users/signup`,
      postData

      //   {headers: {

      //     Authorization: 'Bearer ' + token,
      //  }}
    );
    console.log(response);
  },
  async [LOGIN_ACTION](_: any, payload: any) {
    let postData = {
      email: payload.email,

      password: payload.password,
    };

    const response = await Axios.post(
      `http://localhost:8080/api/users/login`,
      postData
    );
    console.log(response);
  },
};
