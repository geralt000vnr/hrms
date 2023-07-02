import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../../api";
import { baseURL } from "../../api/httpServices";
import { me } from "../../api/UserServices";
import { GlobalIcons } from "../../components/common/GlobalIcons";

function ProfilePage() {
  const { tab } = useParams();

  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    if (tab === "me") {
      me()
        .then((res) => {
          setUserDetails(res.data);
        })
        .catch((err) => console.error("error :", err));
    } else {
      getUserDetails(tab)
        .then((res) => {
          setUserDetails(res.data);
        })
        .catch((err) => console.error("error :", err));
    }
  }, [tab]);

  return (
    <div className=" bg-gray-200 dark:bg-gray-800 dark:text-white">
      <div className="dark:bg-gray-800 bg-gray-200">
        <div className="container">
          <div className="md:flex no-wrap md:-mx-2 ">
            <div className="w-full md:w-3/12 md:mx-2">
              <div className="bg-white dark:bg-neutral-800 p-3 border-t-4 border-green-400">
                <div className="image overflow-hidden">
                  <img
                    className="h-auto w-full mx-auto"
                    src={baseURL + userDetails?.profilePic}
                    alt={"userDetails.profilePic"}
                  />
                </div>
                <h1 className="text-gray-900 dark:text-zinc-100 font-bold text-xl leading-8 my-1">
                  {userDetails?.fullName}
                </h1>
                <h3 className="text-gray-600 dark:text-zinc-300 font-lg text-semibold leading-6">
                  Owner at His Company Inc.
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, eligendi dolorum sequi illum qui unde
                  aspernatur non deserunt
                </p>
                <ul className="bg-gray-100 dark:text-zinc-300 dark:bg-neutral-800 text-gray-600 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>Status</span>
                    <span className="ml-auto">
                      <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                        Active
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>Member since</span>
                    <span className="ml-auto">July 16, 2016</span>
                  </li>
                </ul>
              </div>
              <div className="my-4"></div>
            </div>
            <div className="w-full md:w-9/12 mx-2 h-auto">
              <div className="bg-white dark:bg-neutral-800 p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 dark:text-zinc-300 leading-8">
                  <span clas="text-green-500">{GlobalIcons().user}</span>
                  <span className="tracking-wide">About</span>
                </div>
                <div className="text-gray-700 dark:text-zinc-200">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">First Name</div>
                      <div className="px-4 py-2">{userDetails?.firstName}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Last Name</div>
                      <div className="px-4 py-2">{userDetails?.lastName}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Gender</div>
                      <div className="px-4 py-2">Male</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Contact No.</div>
                      <div className="px-4 py-2">+91 999-696-1322</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Current Address
                      </div>
                      <div className="px-4 py-2">
                        Partap Nagar Sec-6, Jaipur, Rajasthan
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Permanant Address
                      </div>
                      <div className="px-4 py-2">
                        123, Juddi, Rewari, Haryana
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email.</div>
                      <div className="px-4 py-2">
                        <a
                          className="text-blue-800 dark:text-blue-600 hover:underline"
                          href={`mailto:${userDetails?.email}`}
                        >
                          {userDetails?.email}
                        </a>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Birthday</div>
                      <div className="px-4 py-2">July 16, 1999</div>
                    </div>
                  </div>
                </div>
                <div className="block w-full text-blue-800 text-sm font-semibold rounded-lg focus:outline-none focus:shadow-outline text-center p-3 my-4">
                  ___
                </div>
              </div>
              <div className="my-4"></div>
              <div className="bg-white dark:bg-neutral-800 p-3 shadow-sm rounded-sm">
                <div className="grid grid-cols-2">
                  <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 dark:text-zinc-300 leading-8 mb-3">
                      <span clas="text-green-500">{GlobalIcons().file}</span>
                      <span className="tracking-wide">Experience</span>
                    </div>
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-teal-600 dark:text-teal-400">
                          Owner at His Company Inc.
                        </div>
                        <div className="text-gray-500 text-xs dark:text-gray-400">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600 dark:text-teal-400">
                          Owner at His Company Inc.
                        </div>
                        <div className="text-gray-500 text-xs dark:text-gray-400">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600 dark:text-teal-400">
                          Owner at His Company Inc.
                        </div>
                        <div className="text-gray-500 text-xs dark:text-gray-400">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600 dark:text-teal-400">
                          Owner at His Company Inc.
                        </div>
                        <div className="text-gray-500 text-xs dark:text-gray-400">
                          March 2020 - Now
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 dark:text-zinc-300 leading-8 mb-3">
                      <span clas="text-green-500">
                        {GlobalIcons().education}
                      </span>
                      <span className="tracking-wide">Education</span>
                    </div>
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-teal-600 dark:text-teal-400">
                          Masters Degree in Oxford
                        </div>
                        <div className="text-gray-500 text-xs dark:text-gray-400">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600 dark:text-teal-400">
                          Bachelors Degreen in LPU
                        </div>
                        <div className="text-gray-500 text-xs dark:text-gray-400">
                          March 2020 - Now
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
