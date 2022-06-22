import React from "react";
import { useNavigate } from "react-router-dom";
import { tempProjectIssueArr } from "../../components/TempData";

function ProjectIssueList() {
  const navigate = useNavigate();
  return (
    <div>
      <table className="min-w-full table-auto">
        <thead className="justify-between">
          <tr className="bg-gray-100 dark:bg-gray-800 rounded-lg">
            <th className=" py-2">
              <span className="text-gray-900 dark:text-white">S.No.</span>
            </th>
            <th className=" py-2">
              <span className="text-gray-900 dark:text-white">
                Project Name
              </span>
            </th>
            <th className=" py-2">
              <span className="text-gray-900 dark:text-white">
                Project Code
              </span>
            </th>
            <th className=" py-2">
              <span className="text-gray-900 dark:text-white">Description</span>
            </th>
            {/* <th className=" py-2">
              <span className="text-gray-900 dark:text-white">
                Project Start Date
              </span>
            </th>

            <th className=" py-2">
              <span className="text-gray-900 dark:text-white">Submit Date</span>
            </th> */}

            <th className=" py-2">
              <span className="text-gray-900 dark:text-white">Status</span>
            </th>
            <th className=" py-2">
              <span className="text-gray-900 dark:text-white">
                Change Status
              </span>
            </th>
            <th>
              <span className="text-gray-900 dark:text-white">Action</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200 dark:bg-slate-800">
          {tempProjectIssueArr &&
            tempProjectIssueArr.length &&
            tempProjectIssueArr.map((item) => {
              return (
                <tr
                  key={item.id}
                  className="bg-white dark:bg-slate-800 text-black dark:text-white border-4 border-gray-200 dark:border-gray-700"
                >
                  <td className="text-center py-2">#{item.id}</td>
                  <td
                    className="text-center ml-2 font-semibold"
                    title={item.projectName}
                  >
                    {item.projectName.length > 10
                      ? item.projectName.slice(0, 11) + "..."
                      : item.projectName}
                  </td>
                  <td className="text-center py-2">{item.projectCode}</td>
                  <td
                    className="text-center py-2 max-w-[170px]"
                    title={item.projectDescription}
                  >
                    {item.projectDescription.length > 20
                      ? item.projectDescription.slice(0, 21) + "..."
                      : item.projectDescription}
                  </td>
                  {/* <td className="text-center py-2">{item.startDate}</td>

                  <td className="text-center py-2">{item.endDate}</td> */}
                  <td
                    className={
                      item.status === "solved"
                        ? "text-green-500 text-center"
                        : "text-red-500 text-center"
                    }
                  >
                    {item.status === "solved" ? "Solved" : "Not Solved"}
                  </td>
                  <td className="text-center">
                    {item.status === "notSolved" ? (
                      <button
                        title="Mark As Solved"
                        className="px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 duration-300 max-w-[150px] flex-wrap"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </button>
                    ) : (
                      <button
                        title="Mark As Not Solved"
                        className="px-2 py-1 bg-red-400 text-white rounded-md hover:bg-red-600 duration-300 max-w-[150px] flex-wrap"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    )}
                  </td>
                  <td className="text-center">
                    <button
                      title="Report"
                      className="px-2 py-1 my-2 mx-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 duration-300 max-w-[120px] flex-wrap"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </button>
                    <div class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                          <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                              Terms of Service
                            </h3>
                            <button
                              type="button"
                              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                              data-modal-toggle="defaultModal"
                            >
                              <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </button>
                          </div>
                          <div class="p-6 space-y-6">
                            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                              With less than a month to go before the European
                              Union enacts new consumer privacy laws for its
                              citizens, companies around the world are updating
                              their terms of service agreements to comply.
                            </p>
                            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                              The European Union’s General Data Protection
                              Regulation (G.D.P.R.) goes into effect on May 25
                              and is meant to ensure a common set of data rights
                              in the European Union. It requires organizations
                              to notify users as soon as possible of high-risk
                              data breaches that could personally affect them.
                            </p>
                            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                              <button
                                data-modal-toggle="defaultModal"
                                type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                I accept
                              </button>
                              <button
                                data-modal-toggle="defaultModal"
                                type="button"
                                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                              >
                                Decline
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      title="Open"
                      onClick={() => navigate("/projectsEmployee/raiseIssue")}
                      className="px-2 py-1 my-2 mx-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 duration-300 max-w-[120px] flex-wrap"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectIssueList;
