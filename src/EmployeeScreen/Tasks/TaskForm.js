import React, { useEffect, useState } from "react";
import {
  Dropdown,
  FormEndBtn,
  Input,
  Range,
} from "../../components/CustomComponents";
import { useNavigate, useParams } from "react-router-dom";
import {
  tempProjectDropDownArr,
  tempTeamsArr,
} from "./../../components/TempData";
import {
  addTask,
  getCommonComponent,
  getprojectlist,
  getTaskDetails,
  updateTask,
} from "../../api";

function TaskForm() {
  const { tab, id } = useParams();
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [rangeVal, setRangeVal] = useState(1);
  const [team, setTeam] = useState("");
  const [status, setStatus] = useState("In Progress");
  const [assignedBy, setAssignedBy] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [statusArr, setStatusArr] = useState([]);

  useEffect(() => {
    getCommonComponent()
      .then((res) => setStatusArr(res.data))
      .catch((err) => console.log("err : ", err));
    if (tab === "open" && id) {
      console.log("location", id);
      getTaskDetails(id)
        .then((res) => {
          setTaskName(res.data.taskName);
          setProjectName(res.data.projectName);
          setRangeVal(res.data.progressTillNow);
          setTeam(res.data.teamName);
          setStatus(res.data.status);
          setAssignedBy(res.data.assignedBy);
          setAssignedTo(res.data.assignedTo);
          console.log("GetDetailsResponse", res.data);
        })
        .catch((err) => console.log("error", err));
    }
  }, [id, tab]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("addapihitinf ");
    let data = {};
    // let data = new FormData();
    // data.append("taskName", taskName);
    data.taskName = taskName;
    data.projectName = projectName.target.value;
    data.teamName = team.target.value;
    data.status = status.target.value;
    data.assignedBy = assignedBy;
    data.assignedTo = assignedTo;
    data.progressTillNow = rangeVal;
    data.id = id;
    if (tab === "open") {
      console.log("addapihitinf openn");
      updateTask()
        .then((res) => console.log("response", res))
        .catch((err) => console.log("error", err));
    } else {
      console.log("addapihitinf adds", data, status.target);
      addTask(data)
        .then((res) => console.log("response", res))
        .catch((err) => console.log("error", err));
    }
    // getprojectlist()
    //   .then((res) => console.log("response", res))
    //   .catch((err) => console.log("error", err));
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
            dropdownArr={tempProjectDropDownArr}
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
        <Input
          value={assignedBy}
          onChange={(e) => setAssignedBy(e.target.value)}
          label="Asssigned By"
          id="assignedBy"
          required={true}
          type={"text"}
        />
        <Input
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          label="Assigned To"
          id="assignedTo"
          required={true}
          type={"text"}
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
