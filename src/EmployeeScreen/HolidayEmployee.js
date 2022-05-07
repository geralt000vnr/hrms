import React from "react";

function HolidayEmployee() {
  return (
    <div className="mt-10 lg:-mt-80 ml-5 lg:ml-16 mr-5 lg:mr-96 h-auto bg-gray-200 dark:bg-gray-800 w-auto rounded-lg">
      <div className="bg-white dark:bg-gray-900 dark:text-white px-10 py-5 rounded-t-lg text-3xl font-semibold text-gray-900 flex align-center justify-between">
        Employee Holiday
        <button className="text-base flex items-center bg-green-500 px-3 py-2 rounded-md">
          Apply For A Holiday
        </button>
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
                    Holiday Type
                  </span>
                </th>
                <th className=" py-2">
                  <span className="text-gray-900 dark:text-white">
                    Holiday Start Date
                  </span>
                </th>

                <th className=" py-2">
                  <span className="text-gray-900 dark:text-white">
                    Holiday End Date
                  </span>
                </th>

                <th className=" py-2">
                  <span className="text-gray-900 dark:text-white">Status</span>
                </th>
                <th className=" py-2">
                  <span className="text-gray-900 dark:text-white">Action</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-200 dark:bg-slate-800">
              <tr className="bg-white dark:bg-slate-800 text-black dark:text-white border-4 border-gray-200 dark:border-gray-700">
                <td className="text-center py-2">1.</td>
                <td className="text-center ml-2 font-semibold">Sick Leave</td>
                <td className="text-center py-2">05/01/2022</td>

                <td className="text-center py-2">05/01/2022</td>
                <td className="text-green-500">Approved</td>
                <td>
                  <button className="px-2 py-1 my-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 duration-300 max-w-[120px] flex-wrap">
                    Raise An Issue
                  </button>
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-800 text-black dark:text-white border-4 border-gray-200 dark:border-gray-700">
                <td className="text-center py-2">2.</td>
                <td className="text-center ml-2 font-semibold">Paid Leave</td>
                <td className="text-center py-2">10/01/2022</td>

                <td className="text-center py-2">14/01/2022</td>
                <td className="text-green-500">Approved</td>
                <td>
                  <button className="px-2 py-1 my-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 duration-300 flex-wrap">
                    Raise An Issue
                  </button>
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-800 text-black dark:text-white border-4 border-gray-200 dark:border-gray-700">
                <td className="text-center py-2">3.</td>
                <td className="text-center ml-2 font-semibold">
                  Casual Holiday
                </td>
                <td className="text-center py-2">18/01/2022</td>

                <td className="text-center py-2">18/01/2022</td>
                <td className="text-red-500">UnApproved</td>
                <td>
                  <button className="px-2 py-1 my-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 duration-300 max-w-[150px] flex-wrap">
                    Raise An Issue
                  </button>
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-800 text-black dark:text-white border-4 border-gray-200 dark:border-gray-700">
                <td className="text-center py-2">3.</td>
                <td className="text-center ml-2 font-semibold">Sick Leave</td>
                <td className="text-center py-2">20/01/2022</td>
                <td className="text-center py-2">20/01/2022</td>
                <td className="text-blue-500">Decision Pending</td>
                <td>
                  <button className="px-2 py-1 my-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 duration-300 max-w-[150px] flex-wrap">
                    Raise An Issue
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

export default HolidayEmployee;
