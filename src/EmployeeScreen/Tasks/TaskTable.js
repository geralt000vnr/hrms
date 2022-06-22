import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTaskList } from "../../api";
// import { tempTaskData } from "../../components/TempData";

function TaskTable() {
  const navigate = useNavigate();

  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    // axios
    //   .get("http://localhost:9000/")
    getTaskList()
      .then((res) => {
        setTaskList(res.data);
        console.log("response", res.data);
      })
      .catch((err) => console.log("err :", err));
  }, []);

  return (
    <div>
      {taskList &&
        taskList.map((item) => {
          return (
            <div
              className={`flex flex-col p-4 rounded-xl text-white mx-auto my-5 bg-gradient-to-r ${
                item.progressTillNow > 74
                  ? "from-amber-600 via-lime-600 to-green-800"
                  : item.progressTillNow > 49
                  ? "from-blue-500 via-purple-500 to-purple-600"
                  : item.progressTillNow > 24
                  ? "from-yellow-500 via-orange-500 to-red-600"
                  : "from-slate-700 via-gray-700 to-zinc-800"
              }`}
              key={item.id}
            >
              <div>
                <span className="text-xs">{item.teamName}</span>
                {/* <button className="float-right">X</button> */}
              </div>
              <div>
                <p className="text-xl font-bold mt-3 mb-5">{item.taskName}</p>
                <button
                  onClick={() =>
                    navigate(`/taskEmployee/open`, { id: item.id })
                  }
                  className="bg-green-500 rounded-md px-3 py-2 float-right"
                >
                  open
                </button>
              </div>

              <div className="text-xs mb-2">
                {item.progressTillNow}% Task Completed
              </div>
              <div className="w-full bg-gray-400 p-0">
                <div
                  className={`w-[${item.progressTillNow}%] bg-white h-1`}
                ></div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default TaskTable;
