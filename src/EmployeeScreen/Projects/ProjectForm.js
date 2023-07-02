import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addProject, getProjectDetails } from "../../api";
import {
  Dropdown,
  FormEndBtn,
  Input,
  TextArea,
} from "../../components/CustomComponents";
import { tempProjectStatusArr } from "../../components/TempData";
import { fixFormDate } from "../../utils/CommonDateFunction";

function ProjectForm() {
  const { tab, id } = useParams();
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("");
  const [projectCode, setProjectCode] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [status, setStatus] = useState("");
  const [projectStartDate, setProjectStartDate] = useState("");
  const [projectEndDate, setProjectEndDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      projectName,
      projectCode,
      projectDescription,
      status,
      projectStartDate: new Date(projectStartDate),
      projectEndDate: new Date(projectEndDate),
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

  useEffect(() => {
    if (tab === "open") {
      getProjectDetails(id)
        .then((res) => {
          setProjectName(res.data?.projectName);
          setProjectCode(res.data?.projectCode);
          setStatus(res.data?.status);
          setProjectStartDate(fixFormDate(res.data?.projectStartDate));
          setProjectEndDate(fixFormDate(res.data?.projectEndDate));
          setProjectDescription(res.data?.projectDescription);
        })
        .catch((err) => {
          setProjectName("");
          setProjectCode("");
          setStatus("");
          setProjectStartDate();
          setProjectEndDate();
          setProjectDescription("");
          console.error("error :", err);
        });
    } else {
      setProjectName("");
      setProjectCode("");
      setStatus("");
      setProjectStartDate();
      setProjectEndDate();
      setProjectDescription("");
    }
  }, [tab, id]);

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
          value={projectStartDate}
          onChange={(e) => setProjectStartDate(e.target.value)}
          label="Start Date"
          id="startDate"
          required={true}
          type={"date"}
        />
        <Input
          value={projectEndDate}
          onChange={(e) => setProjectEndDate(e.target.value)}
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
