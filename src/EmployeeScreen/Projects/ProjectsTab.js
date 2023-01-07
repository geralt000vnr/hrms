import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectForm from "./ProjectForm";
import ProjectIssue from "./ProjectIssue";
import ProjectIssueList from "./ProjectIssueList";
import ProjectsTable from "./ProjectsTable";

function ProjectsTab() {
  const { tab } = useParams();
  const navigate = useNavigate();
  return (
    <div className="min-table-height">
      <div className="mt-10 lg:-mt-80 ml-5 lg:ml-16 mr-5 lg:mr-64 h-auto bg-gray-200 dark:bg-gray-800 w-auto rounded-lg">
        <div className="bg-white dark:bg-gray-900 dark:text-white px-10 py-5 rounded-t-lg text-3xl font-semibold text-gray-900 flex align-center justify-between">
          Details Of Projects Assigned
          <div className="flex">
            <button
              onClick={() => navigate("/projectsEmployee/issueList")}
              className="text-base flex items-center bg-blue-500 hover:bg-blue-700 duration-300 px-3 py-2 rounded-md"
            >
              Check Issues
            </button>
            {tab !== "add" && (
              <button
                onClick={() => navigate("/projectsEmployee/add")}
                className="text-base flex items-center bg-green-500 px-3 py-2 rounded-md ml-2"
              >
                Create New
              </button>
            )}
          </div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 h-auto px-10 py-5">
          {tab === "table" && <ProjectsTable />}
          {tab === "raiseIssue" && <ProjectIssue />}
          {tab === "add" && <ProjectForm />}
          {tab === "open" && <ProjectForm />}
          {tab === "issueList" && <ProjectIssueList />}
        </div>
      </div>
    </div>
  );
}

export default ProjectsTab;
