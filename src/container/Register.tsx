import React from "react";
import RegistrationComponent from "../components/Register";
import { useSelector, useDispatch } from "react-redux";
import {
  userSelector,
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  signUpNewUser,
} from "../features/user/userSlice";

const Register = () => {
  const dispatch = useDispatch();
  const {
    firstName,
    lastName,
    email,
    password,
    loading,
    message,
  } = useSelector(userSelector);

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const params = {
      first_name: firstName,
      last_name: lastName,
      password,
      confirm_password: password,
      type: "customer",
      email: email,
    };
    dispatch(signUpNewUser(params));
  };

  return (
    <React.Fragment>
      <RegistrationComponent
        handleFirstNameChange={(e: React.FormEvent<HTMLInputElement>) =>
          dispatch(setFirstName(e.currentTarget.value))
        }
        handleLastNameChange={(e: React.FormEvent<HTMLInputElement>) =>
          dispatch(setLastName(e.currentTarget.value))
        }
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

export default Register;
