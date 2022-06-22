import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RaiseIssueForm } from "../../components/CustomComponents";

function RaiseIssue() {
  const navigate = useNavigate();
  const [Title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <RaiseIssueForm
        name={Title}
        setName={setTitle}
        description={description}
        setDescription={setDescription}
        caller="Holiday"
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

export default RaiseIssue;
