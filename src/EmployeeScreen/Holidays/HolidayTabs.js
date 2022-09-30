import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApplyNew from "./ApplyNew";
import HolidayEmployee from "./HolidayEmployee";
import RaiseIssue from "./RaiseIssue";

function HolidayTabs() {
  const { tab } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <div className="mt-10 lg:-mt-80 ml-5 lg:ml-16 mr-5 lg:mr-96 h-auto bg-gray-200 dark:bg-gray-800 w-auto rounded-lg">
        <div className="bg-white dark:bg-gray-900 dark:text-white px-10 py-5 rounded-t-lg text-3xl font-semibold text-gray-900 flex align-center justify-between">
          Employee Holiday
          <div className="flex">
            <button
              onClick={() => navigate("/projectsEmployee/issueList")}
              className="text-base flex items-center bg-blue-500 hover:bg-blue-700 duration-300 px-3 py-2 ml-2 rounded-md"
            >
              Check Issues
            </button>
            {tab !== "applyNew" && (
              <button
                onClick={() => navigate("/holidayEmployee/applyNew")}
                className="text-base flex items-center bg-green-500 px-3 py-2 rounded-md ml-2"
              >
                Apply For A Holiday
              </button>
            )}
          </div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 h-auto px-10 py-5">
          {tab === "table" && <HolidayEmployee />}
          {tab === "raiseIssue" && <RaiseIssue />}
          {tab === "applyNew" && <ApplyNew />}
          {tab === "open" && <ApplyNew />}
        </div>
      </div>
    </div>
  );
}

export default HolidayTabs;
