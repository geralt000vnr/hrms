import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RaiseIssueForm } from "../../components/CustomComponents";

function ProjectIssue() {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <RaiseIssueForm
        name={projectName}
        setName={setProjectName}
        description={description}
        setDescription={setDescription}
        caller="Project"
        onCancel={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
        onSubmit={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      />
    </div>
  );
}

export default ProjectIssue;
