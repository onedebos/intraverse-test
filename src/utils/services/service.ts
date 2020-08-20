import axios from "axios";
const baseUrl = "https://staging.odio.com.ng/v1";

export interface SignUpObj {
  email: string;
  password: string;
  type: string;
  confirm_password: string;
  first_name: string;
  last_name: string;
}

export interface LoginObj {
  email: string;
  password: string;
}

export const signUp = async (params: SignUpObj) => {
  return axios.post(`${baseUrl}/register`, {
    params,
  });
};

export const login = async (params: LoginObj) => {
  return axios.post(`${baseUrl}/login`, {
    params,
  });
};
