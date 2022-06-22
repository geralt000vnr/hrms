import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import TaskForm from "./TaskForm";
import TaskIssueList from "./TaskIssueList";
import TaskIssues from "./TaskIssues";
import TaskTable from "./TaskTable";

function TaskTabs() {
  const { tab } = useParams();
  const navigate = useNavigate();
  console.log("tabs task", tab);
  return (
    <div className="mt-10 lg:-mt-80 ml-5 lg:ml-16 mr-5 lg:mr-96 h-auto bg-gray-200 dark:bg-gray-800 w-auto rounded-lg">
      <div className="bg-white dark:bg-gray-900 dark:text-white px-10 py-5 rounded-t-lg text-3xl font-semibold text-gray-900 flex align-center justify-between">
        Tasks
        <div className="flex">
          <button
            onClick={() => navigate("/taskEmployee/issueList")}
            className="text-base flex items-center bg-blue-500 hover:bg-blue-700 duration-300 px-3 py-2 rounded-md"
          >
            Check Issues
          </button>
          {tab !== "add" && (
            <button
              onClick={() => navigate("/taskEmployee/add")}
              className="text-base flex items-center bg-green-500 px-3 py-2 rounded-md ml-2"
            >
              Add Task
            </button>
          )}
        </div>
      </div>
      <div className="bg-gray-200 dark:bg-gray-800 h-auto px-10 py-5">
        {tab === "table" && <TaskTable />}
        {tab === "raiseIssue" && <TaskIssues />}
        {tab === "add" && <TaskForm />}
        {tab === "open" && <TaskForm />}
        {tab === "issueList" && <TaskIssueList />}
      </div>
    </div>
  );
}

export default TaskTabs;
