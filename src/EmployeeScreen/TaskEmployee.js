import React from "react";

function TaskEmployee() {
  return (
    <div className="mt-10 lg:-mt-80 ml-5 lg:ml-16 mr-5 lg:mr-96 min-h-screen bg-gray-200 dark:bg-gray-800 w-auto rounded-lg">
      <div className="bg-white dark:bg-gray-900 dark:text-white px-10 py-5 rounded-t-lg text-3xl font-semibold text-gray-900 flex align-center justify-between">
        Tasks
        <span className="text-xl bg-green-500 px-3 py-2 rounded-md">
          Add Task
        </span>
      </div>
      <div className=" bg-gray-200 dark:bg-gray-800 dark:text-white px-10 py-5">
        <div className="flex flex-col bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 p-4 rounded-xl text-white mx-auto my-5">
          <div>
            <span className="text-xs">Developer Team</span>
            <button className="float-right">X</button>
          </div>
          <div>
            <p className="text-xl font-bold mt-3 mb-5">HR-MS Calendar page</p>
            <button className="bg-green-500 rounded-md px-3 py-2 float-right">
              Mark As Completed
            </button>
          </div>

          <div className="text-xs mb-2">50% Task Completed</div>
          <div className="w-full bg-gray-400 p-0">
            <div className="w-[50%] bg-white h-1"></div>
          </div>
        </div>
        <div className="flex flex-col bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 p-4 rounded-xl text-white mx-auto my-5">
          <div>
            <span className="text-xs">Developer Team</span>
            <button className="float-right">X</button>
          </div>
          <div>
            <p className="text-xl font-bold mt-3 mb-5">
              HR-MS Authontication page
            </p>
            <button className="bg-green-500 rounded-md px-3 py-2 float-right">
              Mark As Completed
            </button>
          </div>

          <div className="text-xs mb-2">20% Task Completed</div>
          <div className="w-full bg-gray-400 p-0">
            <div className="w-[20%] bg-white h-1"></div>
          </div>
        </div>
        <div className="flex flex-col bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 p-4 rounded-xl text-white mx-auto my-5">
          <div>
            <span className="text-xs">Developer Team</span>
            <button className="float-right">X</button>
          </div>
          <div>
            <p className="text-xl font-bold mt-3 mb-5">HR-MS Calendar page</p>
            <button className="bg-green-500 rounded-md px-3 py-2 float-right">
              Mark As Completed
            </button>
          </div>

          <div className="text-xs mb-2">50% Task Completed</div>
          <div className="w-full bg-gray-400 p-0">
            <div className="w-[50%] bg-white h-1"></div>
          </div>
        </div>
        <div className="flex flex-col bg-gradient-to-r from-amber-600 via-lime-600 to-green-800 p-4 rounded-xl text-white mx-auto my-5">
          <div>
            <span className="text-xs">Developer Team</span>
            <button className="float-right">X</button>
          </div>
          <div>
            <p className="text-xl font-bold mt-3 mb-5">HR-MS Profile page</p>
            <button className="bg-green-500 rounded-md px-3 py-2 float-right">
              Mark As Completed
            </button>
          </div>

          <div className="text-xs mb-2">90% Task Completed</div>
          <div className="w-full bg-gray-400 p-0">
            <div className="w-[90%] bg-white h-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskEmployee;
