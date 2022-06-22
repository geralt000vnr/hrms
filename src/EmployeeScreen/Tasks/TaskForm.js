import React, { useState } from "react";
import {
  Dropdown,
  FormEndBtn,
  Input,
  Range,
} from "../../components/CustomComponents";
import { useNavigate } from "react-router-dom";
import {
  tempProjectDropDownArr,
  tempTeamsArr,
} from "./../../components/TempData";
import { addTask, getprojectlist } from "../../api";

function TaskForm() {
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [rangeVal, setRangeVal] = useState(1);
  const [team, setTeam] = useState("");
  const [status, setStatus] = useState("In Progress");
  const [assignedBy, setAssignedBy] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("taskName", taskName);
    data.append("projectName", projectName);
    data.append("teamName", team);
    data.append("status", status);
    data.append("assignedBy", assignedBy);
    data.append("assignedTo", assignedTo);
    data.append("progress", rangeVal);
    addTask(data)
      .then((res) => console.log("response", res))
      .catch((err) => console.log("error", err));

    getprojectlist()
      .then((res) => console.log("response", res))
      .catch((err) => console.log("error", err));
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
        />
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
        <Input
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          label="Status"
          id="taskStatus"
          required={true}
          type={"text"}
          disabled={true}
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
        {/* <FormEndBtn
          onSubmit={handleSubmitForm}
          onCancel={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        /> */}
        <button
          onClick={handleSubmitForm}
          title="Submit"
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mx-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submits
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
