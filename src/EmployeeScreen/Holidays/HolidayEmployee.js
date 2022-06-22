import React from "react";
import { useNavigate } from "react-router-dom";
import { tempHolidayArr } from "../../components/TempData";

function HolidayEmployee() {
  const navigate = useNavigate();
  return (
    <table className="min-w-full table-auto">
      <thead className="justify-between">
        <tr className="bg-gray-100 dark:bg-gray-800 rounded-lg">
          <th className=" py-2">
            <span className="text-gray-900 dark:text-white">#ID</span>
          </th>
          <th className=" py-2">
            <span className="text-gray-900 dark:text-white">Holiday Type</span>
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
        {tempHolidayArr &&
          tempHolidayArr.length &&
          tempHolidayArr.map((item) => {
            return (
              <tr
                key={item.id}
                className="bg-white dark:bg-slate-800 text-black dark:text-white border-4 border-gray-200 dark:border-gray-700"
              >
                <td className="text-center py-2">#{item.id}</td>
                <td className="text-center ml-2 font-semibold">
                  {item.holidayType}
                </td>
                <td className="text-center py-2">{item.startDate}</td>

                <td className="text-center py-2">{item.endDate}</td>
                <td
                  title={item.status}
                  className={
                    item.status === "approved"
                      ? "text-green-500 text-center"
                      : item.status === "unApproved"
                      ? "text-red-500 text-center"
                      : "text-blue-500 text-center"
                  }
                >
                  {item.status === "approved"
                    ? "Approved"
                    : item.status === "unApproved"
                    ? "Unapproved"
                    : "Decision Pending"}
                </td>
                <td className="text-center">
                  <button
                    title="Raise An issue"
                    onClick={() => navigate("/holidayEmployee/raiseIssue")}
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
                    onClick={() => navigate("/holidayEmployee/open")}
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
        {/* <tr className="bg-white dark:bg-slate-800 text-black dark:text-white border-4 border-gray-200 dark:border-gray-700">
          <td className="text-center py-2">1.</td>
          <td className="text-center ml-2 font-semibold">Sick Leave</td>
          <td className="text-center py-2">05/01/2022</td>

          <td className="text-center py-2">05/01/2022</td>
          <td className="text-green-500">Approved</td>
          <td>
            <button
              onClick={() => navigate("/holidayEmployee/raiseIssue")}
              className="px-2 py-1 my-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 duration-300 max-w-[120px] flex-wrap"
            >
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
            <button
              onClick={() => navigate(`/holidayEmployee/raiseIssue/${id}`)}
              className="px-2 py-1 my-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 duration-300 flex-wrap"
            >
              Raise An Issue
            </button>
          </td>
        </tr>
        <tr className="bg-white dark:bg-slate-800 text-black dark:text-white border-4 border-gray-200 dark:border-gray-700">
          <td className="text-center py-2">3.</td>
          <td className="text-center ml-2 font-semibold">Casual Holiday</td>
          <td className="text-center py-2">18/01/2022</td>

          <td className="text-center py-2">18/01/2022</td>
          <td className="text-red-500">UnApproved</td>
          <td>
            <button
              onClick={() => navigate(`/holidayEmployee/raiseIssue/${id}`)}
              className="px-2 py-1 my-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 duration-300 max-w-[150px] flex-wrap"
            >
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
            <button
              onClick={() => navigate(`/holidayEmployee/raiseIssue/${id}`)}
              className="px-2 py-1 my-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 duration-300 max-w-[150px] flex-wrap"
            >
              Raise An Issue
            </button>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
}

export default HolidayEmployee;
