import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { baseURL } from "../api/httpServices";
import { logout } from "../redux/Action/AuthAction";
import { tempNotificationArr } from "./TempData";

function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const [toggleNotification, setToggleNotification] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    let details = localStorage.getItem("UserDetails");
    details && setUserDetails(JSON.parse(details));
  }, [user]);

  console.log("userImage", userDetails);
  return (
    <>
      <div
        className="bg-gradient-to-tr from-blue-400 to-emerald-300 dark:from-indigo-900 dark:to-emerald-900 text-white py-5 px-16 font-Acme h-auto"
        onLoad={() => toast.success("here we go again")}
      >
        <div className=" flex lg:flex-row flex-col justify-between ">
          <div className="text-lg">
            {" "}
            <Link to="/">HR-MS</Link>
          </div>
          <div className="justify-between flex-col lg:flex-row gap-8 flex text-lg">
            <NavLink to="/" className="active:underline">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mx-2 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Dashboard
            </NavLink>
            <Link to="/calenderemployee" className="active:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Calendar
            </Link>
            <NavLink to="/chatemployee" className="active:underline">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              Chat
            </NavLink>
            <NavLink to="/holidayEmployee/table" className="active:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              Holidays
            </NavLink>
            <NavLink to="/projectsEmployee/table" className="active:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
              Projects
            </NavLink>
            <NavLink to="/taskEmployee/table/list" className="active:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline mx-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Tasks
            </NavLink>
            <NavLink to="/listemployee" className="active:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              Other Employees
            </NavLink>
            <NavLink to="/profileemployee" className="active:underline">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Profile
            </NavLink>
          </div>
          <div className="justify-between gap-8 flex text-xl">
            <button onClick={() => setToggleNotification(!toggleNotification)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Link>
            <button onClick={() => dispatch(logout())}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full hidden lg:block">
          <div className="w-80 mt-16 ml-auto justify-center flex flex-col">
            <img
              // src={baseURL + currentUser.profilePic}
              src={
                baseURL +
                (userDetails && userDetails.profilePic
                  ? userDetails.profilePic
                  : "")
              }
              alt={
                userDetails && userDetails.profilePic
                  ? userDetails.profilePic
                  : "...."
              }
              className="rounded-full h-32 w-32 mx-auto overflow-hidden"
            />
            <div className="mx-auto my-5 text-2xl font-bold">Neeraj Yadav</div>
            <div>
              <section className="antialiased text-gray-600 px-4">
                <div className="flex flex-col justify-center h-full">
                  <div className="w-full max-w-2xl mx-auto ">
                    <div className="p-3">
                      <table className="table-auto w-full">
                        <thead className="text-lg font-semibold text-gray-300">
                          <tr>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-thin text-center">
                                Projects
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap ">
                              <div className="font-thin text-center">
                                Total Tasks
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-thin text-center">
                                Task Completed
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-lg divide-y divide-gray-100 text-white font-roboto ">
                          <tr>
                            <td className="p-2 whitespace-nowrap">
                              <div className=" text-center">28</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-center">10</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-center font-medium">5</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
              <div
                className={`${
                  toggleNotification ? "" : "hidden"
                } absolute top-16 right-44 bg-slate-100 dark:bg-zinc-800 text-teal-800 dark:text-white rounded-md w-72 py-2`}
              >
                {tempNotificationArr &&
                  tempNotificationArr.length &&
                  tempNotificationArr.map((item) => {
                    return (
                      <div key={item.id}>
                        <div className="w-full p-2 hover:bg-zinc-900">
                          <div className="flex justify-between">
                            <span className="block mx-2 font-semibold text-base text-gray-600 dark:text-gray-400">
                              {item.title.length > 15
                                ? item.title.slice(0, 16) + "..."
                                : item.title}
                            </span>
                            <span className="block ml-2 text-sm text-gray-600 dark:text-gray-400">
                              {item.time}
                            </span>
                          </div>
                          <span className="block ml-2 text-sm text-gray-600 dark:text-gray-400">
                            {item.discription.length > 40
                              ? item.discription.slice(0, 41) + "..."
                              : item.discription}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
