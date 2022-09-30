import React from "react";

function TaskEmployee() {
  return (
    <div className="mt-10 lg:-mt-80 ml-5 lg:ml-16 mr-5 lg:mr-96 min-h-screen bg-gray-200 dark:bg-gray-800 w-auto rounded-lg">
      <div className="bg-white dark:bg-gray-900 dark:text-white px-10 py-5 rounded-t-lg text-3xl font-semibold text-gray-900 flex align-center justify-between">
        Tasks
        <button
          // onClick={() => navigate("/holidayEmployee/applyNew")}
          className="text-base flex items-center bg-green-500 px-3 py-2 rounded-md ml-2"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default TaskEmployee;
