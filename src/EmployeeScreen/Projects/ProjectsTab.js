import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectForm from "./ProjectForm";
import ProjectIssue from "./ProjectIssue";
import ProjectIssueList from "./ProjectIssueList";
import ProjectsTable from "./ProjectsTable";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import PageComponent from "../../components/common/PageComponent";

function ProjectsTab() {
  const { tab } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onCloseModal = () => setOpen(false);
  return (
    <PageComponent
      heading={"Details Of Projects Assigned"}
      listOfButtons={[
        {
          buttonName: "Available Projects",
          onClickFunction: function () {
            setOpen(true);
          },
        },
        {
          buttonName: "Check Issues",
          onClickFunction: function () {
            navigate("/projectsEmployee/issueList");
          },
        },
        {
          buttonName: "Create New",
          onClickFunction: function () {
            navigate("/projectsEmployee/add");
          },
          isHidden: tab === "add",
        },
      ]}
      componentToBeShown={
        tab === "table" ? (
          <ProjectsTable />
        ) : tab === "raiseIssue" ? (
          <ProjectIssue />
        ) : tab === "add" || tab === "open" ? (
          <ProjectForm />
        ) : tab === "issueList" ? (
          <ProjectIssueList />
        ) : (
          ""
        )
      }
      modals={[
        <Modal open={open} onClose={onCloseModal} center>
          <h2>Simple centered modal</h2>
        </Modal>,
      ]}
    />
  );
}

export default ProjectsTab;
