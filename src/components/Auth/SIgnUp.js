import React, { useState } from "react";
// import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addUserAction } from "../../redux/Action/AuthAction";
import { toast } from "react-toastify";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");
  const [profilePic, setProfilePic] = useState();
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    if (!firstName) {
      toast.error("FirstName Is Required");
    }
    e.preventDefault();
    let data = new FormData();
    data.append("firstName", firstName);
    data.append("lastName", lastName);
    data.append("email", email);
    data.append("password", passcode);
    data.append("profilePic", profilePic);
    // let data = {
    //   firstName,
    //   lastName,
    //   email,
    //   password: passcode,
    //   profilePic,
    // };
    console.log("profilepicconsoled", profilePic);
    // return;
    const response = await dispatch(addUserAction(data));
    // if (response) {
    //   setFirstName("");
    //   setLastName("");
    //   setEmail("");
    //   setPasscode("");
    //   setProfilePic();
    // }
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
                Create New Account
              </h1>
              <form className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                <div className="pb-2 pt-4">
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    name="FirstName"
                    id="firstName"
                    placeholder="Enter FirstName"
                    className="block w-full p-4 text-lg rounded-sm dark:bg-black bg-white text-gray-800 dark:text-gray-200 focus:outline-none"
                  />
                </div>
                <div className="pb-2 pt-4">
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    name="LastName"
                    id="lastName"
                    placeholder="Enter LastName"
                    className="block w-full p-4 text-lg rounded-sm dark:bg-black bg-white text-gray-800 dark:text-gray-200 focus:outline-none"
                  />
                </div>
                <div className="pb-2 pt-4">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                <div className="pb-2 pt-4">
                  <input
                    // value={passcode}
                    onChange={(e) => {
                      console.log("profilepicconsoled...", e.target.files);
                      setProfilePic(e.target.files[0]);
                    }}
                    className="block w-full p-4 text-lg rounded-sm dark:bg-black bg-white text-gray-800 dark:text-gray-200 focus:outline-none"
                    type="file"
                    name="profilePic"
                    id="profilePic"
                    placeholder="Profile Picture"
                  />
                </div>
                <div className="text-right text-gray-600 hover:underline hover:text-gray-700">
                  <a href="/">Forgot your password?</a>
                </div>
                <div className="px-4 pb-2 pt-4">
                  <button
                    onClick={handleClick}
                    className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
                  >
                    sign in
                  </button>
                </div>
                <Link to={"/"}>Login</Link>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
