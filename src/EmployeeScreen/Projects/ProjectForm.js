import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dropdown,
  FormEndBtn,
  Input,
  TextArea,
} from "../../components/CustomComponents";
import { tempProjectStatusArr } from "../../components/TempData";

function ProjectForm() {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("");
  const [projectCode, setProjectCode] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [otherDetails, setOtherDetails] = useState("");
  return (
    <div>
      <form>
        <Input
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          label="Project Name"
          id="projectName"
          required={true}
          type={"text"}
        />
        <Input
          value={projectCode}
          onChange={(e) => setProjectCode(e.target.value)}
          label="Project Code"
          id="projectCode"
          required={true}
          type={"text"}
        />
        <Dropdown
          dropdownArr={tempProjectStatusArr}
          selectedValue={status}
          setSelectedValue={setStatus}
          label="Status"
          id={"status"}
        />
        <Input
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          label="Start Date"
          id="startDate"
          required={true}
          type={"date"}
        />
        <Input
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          label="End Date"
          id="endDate"
          required={true}
          type={"date"}
        />
        <TextArea
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          label="Project Description"
          id="projectDescription"
          required={true}
          type={"text"}
        />
        <TextArea
          value={otherDetails}
          onChange={(e) => setOtherDetails(e.target.value)}
          label="OtherDetails"
          id="otherDetails"
          required={true}
          type={"text"}
        />
        <FormEndBtn
          onCancel={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        />
      </form>
    </div>
  );
}

export default ProjectForm;
