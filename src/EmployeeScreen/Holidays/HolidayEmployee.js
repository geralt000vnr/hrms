import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { holidayList } from "../../api";
import Table from "../../components/common/Table";
import { renderHolidayStatus } from "../../components/CustomColumn";
import { momentDate } from "../../utils/CommonDateFunction";

function HolidayEmployee() {
  const navigate = useNavigate();

  const [holidaysList, setHolidaysList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    holidayList()
      .then((res) => {
        let tempArr = res.data.map((item) => {
          return {
            ...item,
            actions: [
              {
                title: "Raise An Issue",
                onClickFunction: function () {
                  navigate("/projectsEmployee/raiseIssue");
                },
                color: "bg-blue-400 hover:bg-blue-600",
                icon: (
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
                ),
              },
              {
                title: "Open",
                onClickFunction: function () {
                  navigate("/projectsEmployee/open");
                },
                color: "bg-blue-400 hover:bg-blue-600",
                icon: (
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
                ),
              },
              {
                title: "Assign",
                onClickFunction: function () {
                  let userDetails = JSON.parse(
                    localStorage.getItem("UserDetails"),
                  );
                  const data = {
                    userId: userDetails._id,
                    projectid: item.id,
                  };
                  // assignProject(data).then((res) => {
                  //   toast.success("Successfully Assigned");
                  // });
                },
                color: "bg-blue-400 hover:bg-blue-600",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="currentColor"
                    className="w-5 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                ),
              },
            ],
          };
        });
        console.log("ressssss", tempArr);
        setHolidaysList(tempArr);
        setLoading(false);
      })
      .catch((err) => console.log("error : ", err));
  }, []);

  const tableHeadings = [
    { name: "#ID", accesser: "id", type: "serialNo" },
    { name: "Holiday Type", accesser: "type", type: "heading" },
    { name: "Holiday Start Date", accesser: "startDate", type: "date" },
    { name: "Holiday End Date", accesser: "endDate", type: "date" },
    {
      name: "Status",
      accesser: "status",
      type: "status",
      renderFunction: renderHolidayStatus,
    },
    // { name: "Action", accesser: "actions", type: "buttons" },
    { name: "Action", accesser: "actions", type: "button" },
  ];

  return (
    <div className="min-h-[55vh]">
      <table className="min-w-full table-auto">
        {/* <thead className="justify-between">
          <tr className="bg-gray-100 dark:bg-gray-800 rounded-lg">
            <th className=" py-2">
              <span className="text-gray-900 dark:text-white">#ID</span>
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
        </thead> */}
        {/* <tbody className="bg-gray-200 dark:bg-slate-800">
          {holidaysList &&
            holidaysList.length &&
            holidaysList.map((item) => {
              return (
                <tr
                  key={item.id}
                  className="bg-white dark:bg-slate-800 text-black dark:text-white border-4 border-gray-200 dark:border-gray-700"
                >
                  <td className="text-center py-2">#{item.id}</td>
                  <td className="text-center ml-2 font-semibold">
                    {item.type}
                  </td>
                  <td className="text-center py-2">
                    {momentDate(item.startDate)}
                  </td>

                  <td className="text-center py-2">
                    {momentDate(item.endDate)}
                  </td>
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
        </tbody> */}
      </table>
      <Table
        loading={loading}
        tableHeadings={tableHeadings}
        data={true ? holidaysList : []}
      />
    </div>
  );
}

export default HolidayEmployee;
