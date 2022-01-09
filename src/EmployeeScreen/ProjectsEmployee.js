import React from "react";

function ProjectsEmployee() {
  return (
    <div className="mt-10 lg:-mt-80 ml-5 lg:ml-16 mr-5 lg:mr-96 h-auto bg-gray-200 dark:bg-gray-800 w-auto rounded-lg">
      <div className="bg-white dark:bg-gray-900 dark:text-white px-10 py-5 rounded-t-lg text-3xl font-semibold text-gray-900">
        Details Of Projects Assigned
      </div>
      <div className="bg-gray-200 dark:bg-gray-800 h-auto px-10 py-5">
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
                  <span className="text-gray-900 dark:text-white">
                    Description
                  </span>
                </th>
                <th className=" py-2">
                  <span className="text-gray-900 dark:text-white">
                    Project Start Date
                  </span>
                </th>

                <th className=" py-2">
                  <span className="text-gray-900 dark:text-white">
                    Submit Date
                  </span>
                </th>

                <th className=" py-2">
                  <span className="text-gray-900 dark:text-white">Status</span>
                </th>
                <th className=" py-2">
                  <span className="text-gray-900 dark:text-white">
                    Change Status
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-200 dark:bg-slate-800">
              <tr className="bg-white dark:bg-slate-800 text-black dark:text-white border-4 border-gray-200 dark:border-gray-700">
                <td className="text-center py-2">1.</td>
                <td className="text-center ml-2 font-semibold">Lorem Ipsum</td>
                <td className="text-center py-2">LI0123</td>
                <td className="text-center py-2 max-w-[170px]">
                  This projects is about Human Resources Management System
                  through a dashboard on web.
                </td>
                <td className="text-center py-2">01/01/2022</td>

                <td className="text-center py-2">01/04/2022</td>
                <td className="text-blue-500">In Process</td>
                <td>
                  <button className="px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 duration-300 max-w-[150px] flex-wrap">
                    Mark As Complete
                  </button>
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-800 text-black dark:text-white border-4 border-gray-200 dark:border-gray-700">
                <td className="text-center py-2">2.</td>
                <td className="text-center ml-2 font-semibold">Chat App</td>
                <td className="text-center py-2">CA0123</td>
                <td className="text-center py-2 max-w-[170px]">
                  This projects is for Chat system on web for HRMS project.
                </td>
                <td className="text-center py-2">01/01/2022</td>

                <td className="text-center py-2">01/04/2022</td>
                <td className="text-red-500">Not Started</td>
                <td>
                  <button className="px-2 py-1 bg-blue-400 text-white rounded-md hover:bg-blue-600 duration-300 max-w-[150px] flex-wrap">
                    Mark As Started/In Progress
                  </button>
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-800 text-black dark:text-white border-4 border-gray-200 dark:border-gray-700">
                <td className="text-center py-2">3.</td>
                <td className="text-center ml-2 font-semibold">
                  Calendar System
                </td>
                <td className="text-center py-2">CS0123</td>
                <td className="text-center py-2 max-w-[170px]">
                  This projects is about Showing Holiday Calendar
                </td>
                <td className="text-center py-2">01/01/2022</td>

                <td className="text-center py-2">01/04/2022</td>
                <td className="text-green-500">Completed</td>
                <td>
                  <button className="px-2 py-1 bg-red-400 text-white rounded-md hover:bg-red-600 duration-300 max-w-[150px] flex-wrap">
                    Remove Project from List
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProjectsEmployee;
