import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../utils/authProvider";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");

    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div className="flex flex-col justify-center min-h-screen overflow-hidden">
      <div>
        <h1 className=" m-6 flex justify-center items-center text-4xl font-bold text-center">
          TechChat
        </h1>
        <div className="min-w-fit w-1/4 p-6 m-auto rounded-3xl shadow-md lg:max-w-xl bg-gray-200">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            Login
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2 flex justify-center">
              <input
                placeholder="Type Nickname"
                type="text"
                name="username"
                className=" block w-3/4 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-2xl focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 text-center"
              />
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="w-1/3 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
