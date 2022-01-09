import React from "react";
import { Link } from "react-router-dom";
import loginBg from "../assets/loginUi3.jpg";

function Auth() {
  return (
    <div
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
      className="h-screen pt-28"
    >
      <div className="bg-transparent backdrop-blur-md hover:backdrop-blur-sm duration-500 mx-auto w-96  rounded-2xl text-center p-10">
        <div className="text-green-500">Login Your Account</div>
        <div className="flex-col flex">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="bg-gray-100 rounded-full px-5 py-2 text-green-500 my-2 focus:outline-none placeholder-neutral-600"
          />
          <input
            type="password"
            className="bg-gray-100 rounded-full px-5 py-2 text-green-500 my-2 focus:outline-none"
          />
          <Link
            to={"/home/employee"}
            className="bg-green-500 rounded-lg text-gray-100 py-2 my-2"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Auth;
