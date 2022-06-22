import React from "react";
import { useNavigate } from "react-router-dom";
import { tempProjectsArr } from "../../components/TempData";

function ProjectsTable() {
  const navigate = useNavigate();
  return (
    <div>
      <table className="min-w-full table-auto">
        <thead className="justify-between">
          <tr className="bg-gray-100 dark:bg-gray-800 rounded-lg font-Acme">
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
          {tempProjectsArr &&
            tempProjectsArr.length &&
            tempProjectsArr.map((item) => {
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
                  <td className="text-center py-2 font-roboto">
                    {item.projectCode}
                  </td>
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
                      item.status === "inProcess"
                        ? "text-blue-500 text-center"
                        : item.status === "notStarted"
                        ? "text-red-500 text-center"
                        : "text-green-500 text-center"
                    }
                  >
                    {item.status === "inProcess"
                      ? "In Process"
                      : item.status === "notStarted"
                      ? "Not Started"
                      : "Completed"}
                  </td>
                  <td className="text-center">
                    {item.status === "inProcess" ? (
                      <button
                        title="Mark As Completed"
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
                    ) : item.status === "notStarted" ? (
                      <button
                        title="Mark As Started/In Progress"
                        className="px-2 py-1 bg-blue-400 text-white rounded-md hover:bg-blue-600 duration-300 max-w-[150px] flex-wrap"
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
                            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                          />
                        </svg>
                      </button>
                    ) : (
                      <button
                        title="Remove Project from List"
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
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    )}
                  </td>
                  <td className="text-center">
                    <button
                      title="Raise An issue"
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
                          d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                        />
                      </svg>
                    </button>
                    <button
                      title="Open"
                      onClick={() => navigate("/projectsEmployee/open")}
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

export default ProjectsTable;
