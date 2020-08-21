import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

interface LoginProps {
  email?: string;
  password?: string;
  handleEmailChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit: any;
  loading: boolean;
}

const Login: React.FC<LoginProps> = ({
  handleEmailChange,
  handlePasswordChange,
  handleSubmit,
  loading,
}) => {
  return (
    <React.Fragment>
      <Menu isBtnDisabled={true} />

      <div className="min-h-auto flex flex-col justify-center items-center m-auto py-10">
        <div className="w-3/4 md:w-3/4 lg:w-1/3">
          <div className="bg-blue-1001 text-white px-4 py-3 font-bold w-1/2 md:w-1/4 lg:w-1/4">
            <h2>Customer</h2>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="border-t-4 border-blue-1001 shadow-lg px-10 py-20 pb-32 w-3/4 lg:w-1/3"
        >
          <div className="mb-8 text-blue-1001 ml-10">Lorem Ipsum</div>

          <label htmlFor="Email">Email:</label>
          <div>
            <input
              type="email"
              className="border border-gray-500 p-2 rounded-md mb-6 w-full"
              onChange={handleEmailChange}
              required
            />
          </div>
          <label htmlFor="Email">Password:</label>
          <div>
            <input
              type="password"
              className="border border-gray-500 p-2 rounded-md w-full"
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button
            className="w-full bg-blue-1002 text-center text-white py-4 mt-8 rounded-md"
            type="submit"
          >
            {loading ? <span id="loading"></span> : "Log In"}
          </button>
          <p className="text-center mt-4">
            Don't have an account?
            <Link to="/register" className="ml-2 text-blue-1003">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
