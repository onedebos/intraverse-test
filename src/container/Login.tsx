import React from "react";
import LoginComponent from "../components/Login";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  userSelector,
  setPassword,
  loginUser,
} from "../features/user/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { email, password, message, loading } = useSelector(userSelector);

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const params = {
      email,
      password,
    };
    dispatch(loginUser(params));
  };

  return (
    <React.Fragment>
      <LoginComponent
        handleEmailChange={(e: React.FormEvent<HTMLInputElement>) =>
          dispatch(setEmail(e.currentTarget.value))
        }
        handlePasswordChange={(e: React.FormEvent<HTMLInputElement>) =>
          dispatch(setPassword(e.currentTarget.value))
        }
        handleSubmit={handleSubmit}
        loading={loading}
        message={message}
      />
    </React.Fragment>
  );
};

export default Login;
