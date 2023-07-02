import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageComponent from "../../components/common/PageComponent";
import TaskForm from "./TaskForm";
import TaskIssueList from "./TaskIssueList";
import TaskIssues from "./TaskIssues";
import TaskTable from "./TaskTable";

function TaskTabs() {
  const { tab } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <PageComponent
        heading={"Tasks"}
        listOfButtons={[
          {
            buttonName: "Check Issues",
            onClickFunction: function () {
              navigate("/taskEmployee/issueList/issues");
            },
            isHidden: tab === "issueList",
          },
          {
            buttonName: "Create New",
            onClickFunction: function () {
              navigate("/taskEmployee/add/form");
            },
            isHidden: tab === "add",
          },
        ]}
        componentToBeShown={
          tab === "table" ? (
            <TaskTable />
          ) : tab === "raiseIssue" ? (
            <TaskIssues />
          ) : tab === "add" || tab === "open" ? (
            <TaskForm />
          ) : tab === "issueList" ? (
            <TaskIssueList />
          ) : (
            ""
          )
        }
      />
    </>
  );
}

export default TaskTabs;
