import React, { useState } from "react";
// import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/Action/AuthAction";
import { Link } from "react-router-dom";

const Auth = () => {
  const [id, setId] = useState("neeraj@gmail.com");
  const [passcode, setPasscode] = useState("password");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const data = { email: id, password: passcode };
    dispatch(loginAction(data));
  };

  return (
    <>
      <div>
        <section className="min-h-screen flex items-stretch text-white ">
          <div
            className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div className="w-full px-24 z-10">
              <h1 className="text-5xl font-bold text-left tracking-wide">
                Keep it special
              </h1>
              <p className="text-3xl my-4">
                Capture your personal memory in unique way, anywhere.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-gray-200 dark:bg-neutral-800">
            <div
              className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)",
              }}
            >
              <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            </div>
            <div className="w-full py-6 z-20">
              <h1 className="my-6 text-4xl text-black dark:text-gray-200">
                Login to Your Account
              </h1>
              <form className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                <div className="pb-2 pt-4">
                  <input
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="block w-full p-4 text-lg rounded-sm dark:bg-black bg-white text-gray-800 dark:text-gray-200 focus:outline-none"
                  />
                </div>
                <div className="pb-2 pt-4">
                  <input
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    className="block w-full p-4 text-lg rounded-sm dark:bg-black bg-white text-gray-800 dark:text-gray-200 focus:outline-none"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="text-right text-gray-600 hover:underline hover:text-gray-700">
                  <a href="/">Forgot your password?</a>
                </div>
                <div className="px-4 pb-2 pt-4">
                  <button
                    onClick={handleLogin}
                    type="button"
                    className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
                  >
                    Login
                  </button>
                </div>
                <Link to={"/signup"}>Sign Up</Link>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Auth;
