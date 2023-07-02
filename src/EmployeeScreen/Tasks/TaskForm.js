import React, { useEffect, useState } from "react";
import {
  Dropdown,
  FormEndBtn,
  Input,
  Range,
} from "../../components/CustomComponents";
import { useNavigate, useParams } from "react-router-dom";
import { tempTeamsArr } from "./../../components/TempData";
import {
  addTask,
  getCommonComponent,
  getTaskDetails,
  updateTask,
} from "../../api";
import { toast } from "react-toastify";

function TaskForm() {
  const { tab, id, projectId } = useParams();
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [rangeVal, setRangeVal] = useState(1);
  const [team, setTeam] = useState("");
  const [status, setStatus] = useState("");
  const [assignedBy, setAssignedBy] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [statusArr, setStatusArr] = useState([]);
  const [projectArr, setProjectArr] = useState([]);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    let userData = localStorage.getItem("UserDetails");
    if (userData) {
      setAssignedBy(JSON.parse(userData)?._id);
    }
    if (projectId) {
      setProjectName(projectId);
    }
    let apiData = {
      valuesRequired: ["taskStatus", "projectList", "userList"],
    };
    getCommonComponent(apiData)
      .then(async (res) => {
        setStatusArr(res.data.taskStatus);
        setUserList(res.data?.userList);
        setProjectArr(res.data.ProjectList);
      })
      .catch((err) => console.log("err : ", err));
    if (tab === "open" && id) {
      getTaskDetails(id)
        .then((res) => {
          setTaskName(res.data.taskName);
          setProjectName(res.data.project);
          setRangeVal(res.data.progressTillNow);
          setTeam(res.data.teamName);
          setStatus(res.data.status);
          // commented because this value should always be fixed to logined user
          // setAssignedBy(res.data.assignedBy);
          setAssignedTo(res.data.assignedTo);
        })
        .catch((err) => console.log("error", err));
    }
  }, [id, tab, projectId]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    let data = {};
    // let data = new FormData();
    // data.append("taskName", taskName);
    data.taskName = taskName;
    data.project = projectName;
    data.teamName = team;
    data.status = status;
    data.assignedBy = assignedBy;
    data.assignedTo = assignedTo;
    data.progressTillNow = rangeVal;
    data.id = id;
    console.log("data", data);
    if (tab === "open") {
      updateTask(data)
        .then((res) => toast.success(res.data))
        .catch((err) => console.log("error", err));
    } else {
      addTask(data)
        .then((res) => console.log("response", res))
        .catch((err) => console.log("error", err));
    }
  };

  return (
    <div>
      <form>
        <Input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          label="Task Name"
          id="taskName"
          required={true}
          type={"text"}
          // inValid
          // inValidMsg={"helelo"}
        />
        <div className="flex gap-10">
          <Dropdown
            dropdownArr={projectArr}
            selectedValue={projectName}
            setSelectedValue={setProjectName}
            label="Project Name"
            id={"projectName"}
            required={true}
          />
          <Dropdown
            dropdownArr={tempTeamsArr}
            selectedValue={team}
            setSelectedValue={setTeam}
            label="Team Name"
            id={"teamName"}
            required={true}
          />
        </div>
        <Dropdown
          dropdownArr={statusArr}
          selectedValue={status}
          setSelectedValue={setStatus}
          label="Status"
          id="taskStatus"
          required={true}
          // disabled={true}
        />
        <Dropdown
          dropdownArr={userList}
          selectedValue={assignedBy}
          setSelectedValue={setAssignedBy}
          label="Asssigned By"
          id="assignedBy"
          required={true}
          disabled={true}
        />
        <Dropdown
          dropdownArr={userList}
          selectedValue={assignedTo}
          setSelectedValue={setAssignedTo}
          label="Asssigned To"
          id="assignedTo"
          required={true}
        />
        <Range
          value={rangeVal}
          onChange={(e) => setRangeVal(e.target.value)}
          required={true}
          id="TaskRangeForm"
          label="Progress Till Now"
        />
        <FormEndBtn
          onSubmit={handleSubmitForm}
          onCancel={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        />
        {/* <button
          onClick={handleSubmitForm}
          title="Submit"
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mx-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button> */}
        {/* <TestForm /> */}
      </form>
    </div>
  );
}

export default TaskForm;
