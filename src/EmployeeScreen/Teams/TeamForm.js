import React, { useEffect, useState } from "react";
import { Dropdown, FormEndBtn, Input } from "../../components/CustomComponents";
import { useNavigate, useParams } from "react-router-dom";
import { getCommonComponent, getTaskDetails } from "../../api";
import { createTeam } from "../../api/TeamServices";

function TeamForm() {
  const { tab, id, projectId } = useParams();
  const navigate = useNavigate();
  const [teamName, setTeamName] = useState("");
  const [teamLead, setTeamLead] = useState("");
  const [assignedMembers, setAssignedMembers] = useState([]);
  const [seniorMembers, setSeniorMembers] = useState([]);
  const [assignedProjects, setAssignedProjects] = useState([]);
  const [projectArr, setProjectArr] = useState([]);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    let apiData = {
      valuesRequired: ["projectList", "userList"],
    };
    getCommonComponent(apiData)
      .then(async (res) => {
        setUserList(res.data?.userList);
        setProjectArr(res.data.ProjectList);
      })
      .catch((err) => console.log("err : ", err));
    if (tab === "open" && id) {
      getTaskDetails(id)
        .then((res) => {
          setTeamName(res.data.teamName);
          setTeamLead(res.data.teamLead);
          setAssignedMembers(res.data.assignedMembers);
          setSeniorMembers(res.data.seniorMembers);
          setAssignedProjects(res.data.assignedProjects);
        })
        .catch((err) => console.log("error", err));
    }
  }, [id, tab, projectId]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    let data = {};
    data.teamName = teamName;
    data.teamLead = teamLead.length ? teamLead[0].value : "";
    data.assignedMembers = assignedMembers.map((item) => item.value);
    data.seniorMembers = seniorMembers.map((item) => item.value);
    data.assignedProjects = assignedProjects.map((item) => item.value);
    if (id) data.id = id;
    if (tab === "open") {
      //   updateTask(data)
      //     .then((res) => toast.success(res.data))
      //     .catch((err) => console.log("error", err));
    } else {
      createTeam(data)
        .then((res) => console.log("response", res))
        .catch((err) => console.log("error", err));
    }
  };

  return (
    <div>
      <form>
        <Input
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          label="Team Name"
          id="teamName"
          required={true}
          type={"text"}
          // inValid
          // inValidMsg={"helelo"}
        />
        <Dropdown
          dropdownArr={userList}
          selectedValue={teamLead}
          setSelectedValue={setTeamLead}
          label="Team Lead"
          id="teamLead"
          required={true}
        />
        <Dropdown
          dropdownArr={userList}
          selectedValue={assignedMembers}
          setSelectedValue={setAssignedMembers}
          label="Assigned Members"
          id="assignedMembers"
          multiple
          // disabled={true}
        />
        <Dropdown
          dropdownArr={userList}
          selectedValue={seniorMembers}
          setSelectedValue={setSeniorMembers}
          label="Senior Members"
          id="seniorMembers"
          multiple
        />
        <Dropdown
          dropdownArr={projectArr}
          selectedValue={assignedProjects}
          setSelectedValue={setAssignedProjects}
          label="Assigned Projects"
          id="assignedProjects"
          multiple
          //   multiple
        />
        <FormEndBtn
          onSubmit={handleSubmitForm}
          onCancel={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        />
      </form>
    </div>
  );
}

export default TeamForm;
