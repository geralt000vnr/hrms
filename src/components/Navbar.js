import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { baseURL } from "../api/httpServices";
import { logout } from "../redux/Action/AuthAction";
import { GlobalIcons } from "./common/GlobalIcons";
import { tempNotificationArr } from "./TempData";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state);
  const [toggleNotification, setToggleNotification] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    let details = localStorage.getItem("UserDetails");
    details && setUserDetails(JSON.parse(details));
  }, [user]);

  // console.log("userImage", userDetails);
  return (
    <>
      <div className="bg-gradient-to-tr from-blue-400 to-emerald-300 dark:from-indigo-900 dark:to-emerald-900 text-white py-5 px-16 font-Acme h-auto">
        <div className=" flex lg:flex-row flex-col justify-between ">
          <div className="text-lg">
            {" "}
            <Link to="/">HR-MS</Link>
          </div>
          <div className="justify-between flex-col lg:flex-row gap-8 flex text-lg">
            <NavLink to="/" className="active:underline">
              {" "}
              {GlobalIcons().home}
              Dashboard
            </NavLink>
            <NavLink to="/holidayEmployee/table" className="active:underline">
              {GlobalIcons().holiday}
              Holidays
            </NavLink>
            <NavLink to="/projectsEmployee/table" className="active:underline">
              {GlobalIcons().projects}
              Projects
            </NavLink>
            <NavLink to="/taskEmployee/table/list" className="active:underline">
              {GlobalIcons().tasks}
              Tasks
            </NavLink>
            <NavLink to="/chatemployee/table" className="active:underline">
              {GlobalIcons().chat}
              Chat/Mail
            </NavLink>
            <NavLink to="/teams/table" className="active:underline">
              {GlobalIcons().team}
              Teams
            </NavLink>
            <NavLink to="/listemployee" className="active:underline">
              {GlobalIcons().multipleUsers}
              Other Employees
            </NavLink>
            <NavLink to="/userProfile/me" className="active:underline">
              {" "}
              {GlobalIcons().user}
              Profile
            </NavLink>
          </div>
          <div className="justify-between gap-8 flex text-xl">
            <button
              onClick={() => {
                setToggleMenu(false);
                setToggleNotification(!toggleNotification);
              }}
            >
              {GlobalIcons().notification}
            </button>
            <Link to="/">{GlobalIcons().setting}</Link>
            <button
              onClick={() => {
                setToggleNotification(false);
                setToggleMenu(!toggleMenu);
              }}
            >
              {GlobalIcons().hamburger}
            </button>
          </div>
        </div>
        <div className="w-full hidden lg:block">
          <div className="mt-8 ml-auto ">
            <div className="mr-0 ml-auto justify-center flex flex-col">
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
                className="rounded-full h-32 w-32 mr-0 ml-auto overflow-hidden"
              />
              <div className="ml-auto my-5 text-2xl font-bold">
                {userDetails &&
                  userDetails.firstName + " " + userDetails.lastName}
              </div>
              <div className="ml-auto">
                <section className="antialiased text-gray-600 px-4">
                  <div className="flex flex-col justify-center h-full">
                    <div className="max-w-2xl mx-auto ">
                      <div className="py-3">
                        <div className="table-auto text-right">
                          <div>
                            <span className="text-lg text-gray-300 font-thin">
                              Projects :&nbsp;
                            </span>
                            <span className="text-lg divide-y divide-gray-100 text-white font-roboto">
                              28
                            </span>
                          </div>
                          <div>
                            <span className="text-lg font-thin text-gray-300">
                              Total Tasks :&nbsp;
                            </span>
                            <span className="text-lg divide-y divide-gray-100 text-white font-roboto">
                              10
                            </span>
                          </div>
                          <div>
                            <span className="text-lg font-thin text-gray-300">
                              Tasks Completed :&nbsp;
                            </span>
                            <span className="text-lg divide-y divide-gray-100 text-white font-roboto">
                              5
                            </span>
                          </div>
                        </div>
                        {/* <table className="table-auto w-full">
                        <thead className="text-lg font-semibold text-gray-300">
                          <tr className="flex flex-col">
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
                          <tr className="flex flex-col">
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
                      </table> */}
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
                <div
                  className={`${
                    toggleMenu ? "" : "hidden"
                  } absolute top-16 right-14 bg-slate-100 dark:bg-zinc-800 text-teal-800 dark:text-white rounded-md w-72 py-2`}
                >
                  <div
                    className="w-full p-2 hover:bg-zinc-900 cursor-pointer"
                    onClick={() => {
                      setToggleMenu(false);
                      setToggleNotification(false);
                      navigate("/permissionManagement/table");
                    }}
                  >
                    <div className="flex justify-between">
                      <span className="block mx-2 font-semibold text-base text-gray-600 dark:text-gray-400">
                        Permission Management
                      </span>
                    </div>
                  </div>
                  <div
                    className="w-full p-2 hover:bg-zinc-900 cursor-pointer"
                    onClick={() => {
                      setToggleMenu(false);
                      setToggleNotification(false);
                      navigate("/calenderemployee");
                    }}
                  >
                    <div className="flex justify-between">
                      <span className="block mx-2 font-semibold text-base text-gray-600 dark:text-gray-400">
                        Calendar
                      </span>
                    </div>
                  </div>
                  <div
                    className="w-full p-2 hover:bg-zinc-900 cursor-pointer"
                    onClick={() => dispatch(logout())}
                  >
                    <div className="flex justify-between">
                      <span className="block mx-2 font-semibold text-base text-gray-600 dark:text-gray-400">
                        Log Out
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
