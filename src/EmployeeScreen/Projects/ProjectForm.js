import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addProject } from "../../api";
import {
  Dropdown,
  FormEndBtn,
  Input,
  TextArea,
} from "../../components/CustomComponents";
import { tempProjectStatusArr } from "../../components/TempData";

function ProjectForm() {
  const { tab } = useParams();
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("");
  const [projectCode, setProjectCode] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("projectName", projectName);
    // formData.append("projectCode", projectCode);
    // formData.append("projectDescription", projectDescription);
    // formData.append("status", status);
    // formData.append("startDate", startDate);
    // formData.append("endDate", endDate);
    const data = {
      projectName,
      projectCode,
      projectDescription,
      status,
      startDate,
      endDate,
    };
    if (tab === "add") {
      addProject(data)
        .then((res) => {
          console.log("response in add project function");
          toast.success("Project Added");
          navigate(-1);
        })
        .catch((err) => {
          console.log("error in adding project", err, status);
          toast.error("Project Not Added");
        });
    } else {
      console.log("in submit form", data);
    }
  };
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
          setSelectedValue={(e) => setStatus(e.target.value)}
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
        <FormEndBtn
          onSubmit={onSubmit}
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
