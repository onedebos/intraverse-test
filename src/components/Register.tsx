import React from "react";
import lady from "../assets/images/ODIO-LADY.png";
import Menu from "./Menu";
import { Link } from "react-router-dom";

interface RegisterProps {
  handleFirstNameChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleLastNameChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit: any;
  loading: boolean;
  message: string;
}

const Register: React.FC<RegisterProps> = ({
  handleFirstNameChange,
  handleLastNameChange,
  handleEmailChange,
  handlePasswordChange,
  handleSubmit,
  loading,
  message,
}) => {
  return (
    <div className="bg-blue-50">
      <Menu isBtnDisabled={true} />
      <div className="lg:grid grid-cols-2 gap-0 pt-20 px-4 md:px-40 shadow-lg min-h-screen">
        <img
          src={lady}
          alt="lady"
          className="col-span-1 w-full hidden lg:block"
        />

        <form
          className="bg-white col-span-1 shadow-lg w-full py-10 md:py-20 mt-3"
          onSubmit={handleSubmit}
        >
          <h2 className="font-bold text-2xl ml-10 mr-6 md:ml-24 lg:ml-32">
            Lorem ipsum dolor sit amet
          </h2>
          <h4 className="mt-10 mb-8 text-green-1000 ml-10 md:ml-24 lg:ml-32">
            Lorem ipsum dolor sit amet
          </h4>

          <div className="flex flex-col justify-center items-center">
            <input
              type="text"
              placeholder="First Name*"
              className="border-2 border-blue-1003 w-2/3  p-2 rounded-md mb-3"
              onChange={handleFirstNameChange}
              required
              autoComplete="true"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="border-2 border-blue-1003 w-2/3 p-2 rounded-md mb-3"
              onChange={handleLastNameChange}
              required
              autoComplete="true"
            />

            <input
              type="email"
              placeholder="Email*"
              className="border-2 border-blue-1003 w-2/3 p-2 rounded-md mb-3"
              onChange={handleEmailChange}
              required
              autoComplete="true"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-2 border-blue-1003 w-2/3 p-2 rounded-md mb-3"
              onChange={handlePasswordChange}
              required
              autoComplete="true"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
            />
            <small className="text-center px-20">
              Passwords should have at least 1 upper case, 1 lower case letter,
              1 number and at least 8 characters.
            </small>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gray-1004 px-16 py-4 rounded-md text-white hover:bg-blue-1000 transition ease-in-out duration-300 mt-8"
              >
                {loading ? <span id="loading"></span> : "Sign Up"}
              </button>
            </div>

            <p className="mt-8 mx-10 md:mx-24">
              {message ? (
                message
              ) : (
                <span>
                  Already Signed up?
                  <Link to="/login" className="text-blue-600">
                    {" "}
                    Login
                  </Link>{" "}
                </span>
              )}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
