import React, { useEffect, useState } from "react";
import { baseURL } from "../api/httpServices";

function ProfileEmployee() {
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    let details = localStorage.getItem("UserDetails");
    setUserDetails(JSON.parse(details));
  }, []);
  return (
    <div className="mt-10 lg:-mt-80 ml-5 lg:ml-16 mr-5 lg:mr-96 min-h-screen h-auto bg-gray-200 dark:bg-gray-800 w-auto rounded-lg">
      <div className="bg-white dark:bg-gray-900 dark:text-white px-10 py-5 rounded-t-lg text-3xl font-semibold text-gray-900">
        My Profile
      </div>
      <div className=" bg-gray-200 dark:bg-gray-800 dark:text-white">
        <div class="dark:bg-gray-800 bg-gray-200">
          <div class="container mx-auto my-5 p-5">
            <div class="md:flex no-wrap md:-mx-2 ">
              <div class="w-full md:w-3/12 md:mx-2">
                <div class="bg-white dark:bg-neutral-800 p-3 border-t-4 border-green-400">
                  <div class="image overflow-hidden">
                    <img
                      class="h-auto w-full mx-auto"
                      src={baseURL + userDetails.profilePic}
                      alt={userDetails.profilePic}
                    />
                  </div>
                  <h1 class="text-gray-900 dark:text-zinc-100 font-bold text-xl leading-8 my-1">
                    Neeraj Yadav
                  </h1>
                  <h3 class="text-gray-600 dark:text-zinc-300 font-lg text-semibold leading-6">
                    Owner at His Company Inc.
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400 leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, eligendi dolorum sequi illum qui unde
                    aspernatur non deserunt
                  </p>
                  <ul class="bg-gray-100 dark:text-zinc-300 dark:bg-neutral-800 text-gray-600 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                    <li class="flex items-center py-3">
                      <span>Status</span>
                      <span class="ml-auto">
                        <span class="bg-green-500 py-1 px-2 rounded text-white text-sm">
                          Active
                        </span>
                      </span>
                    </li>
                    <li class="flex items-center py-3">
                      <span>Member since</span>
                      <span class="ml-auto">July 16, 2016</span>
                    </li>
                  </ul>
                </div>
                <div class="my-4"></div>
              </div>
              <div class="w-full md:w-9/12 mx-2 lg:h-64 h-auto">
                <div class="bg-white dark:bg-neutral-800 p-3 shadow-sm rounded-sm">
                  <div class="flex items-center space-x-2 font-semibold text-gray-900 dark:text-zinc-300 leading-8">
                    <span clas="text-green-500">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <span class="tracking-wide">About</span>
                  </div>
                  <div class="text-gray-700 dark:text-zinc-200">
                    <div class="grid md:grid-cols-2 text-sm">
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">First Name</div>
                        <div class="px-4 py-2">Neeraj</div>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Last Name</div>
                        <div class="px-4 py-2">Yadav</div>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Gender</div>
                        <div class="px-4 py-2">Male</div>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Contact No.</div>
                        <div class="px-4 py-2">+91 999-696-1322</div>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">
                          Current Address
                        </div>
                        <div class="px-4 py-2">
                          Partap Nagar Sec-6, Jaipur, Rajasthan
                        </div>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">
                          Permanant Address
                        </div>
                        <div class="px-4 py-2">123, Juddi, Rewari, Haryana</div>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Email.</div>
                        <div class="px-4 py-2">
                          <a
                            class="text-blue-800 dark:text-blue-600 hover:underline"
                            href="mailto:vnrraj56@gmail.com"
                          >
                            vnrraj56@gmail.com
                          </a>
                        </div>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Birthday</div>
                        <div class="px-4 py-2">July 16, 1999</div>
                      </div>
                    </div>
                  </div>
                  <div class="block w-full text-blue-800 text-sm font-semibold rounded-lg focus:outline-none focus:shadow-outline text-center p-3 my-4">
                    ___
                  </div>
                </div>
                <div class="my-4"></div>
                <div class="bg-white dark:bg-neutral-800 p-3 shadow-sm rounded-sm">
                  <div class="grid grid-cols-2">
                    <div>
                      <div class="flex items-center space-x-2 font-semibold text-gray-900 dark:text-zinc-300 leading-8 mb-3">
                        <span clas="text-green-500">
                          <svg
                            class="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </span>
                        <span class="tracking-wide">Experience</span>
                      </div>
                      <ul class="list-inside space-y-2">
                        <li>
                          <div class="text-teal-600 dark:text-teal-400">
                            Owner at His Company Inc.
                          </div>
                          <div class="text-gray-500 text-xs dark:text-gray-400">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div class="text-teal-600 dark:text-teal-400">
                            Owner at His Company Inc.
                          </div>
                          <div class="text-gray-500 text-xs dark:text-gray-400">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div class="text-teal-600 dark:text-teal-400">
                            Owner at His Company Inc.
                          </div>
                          <div class="text-gray-500 text-xs dark:text-gray-400">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div class="text-teal-600 dark:text-teal-400">
                            Owner at His Company Inc.
                          </div>
                          <div class="text-gray-500 text-xs dark:text-gray-400">
                            March 2020 - Now
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div class="flex items-center space-x-2 font-semibold text-gray-900 dark:text-zinc-300 leading-8 mb-3">
                        <span clas="text-green-500">
                          <svg
                            class="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                              fill="#fff"
                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                          </svg>
                        </span>
                        <span class="tracking-wide">Education</span>
                      </div>
                      <ul class="list-inside space-y-2">
                        <li>
                          <div class="text-teal-600 dark:text-teal-400">
                            Masters Degree in Oxford
                          </div>
                          <div class="text-gray-500 text-xs dark:text-gray-400">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div class="text-teal-600 dark:text-teal-400">
                            Bachelors Degreen in LPU
                          </div>
                          <div class="text-gray-500 text-xs dark:text-gray-400">
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
    </div>
  );
}

export default ProfileEmployee;
