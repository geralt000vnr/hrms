import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { assignProject, getProjectListPagination } from "../../api";
import Table from "../../components/common/Table2";
import { renderProjectStatus } from "../../components/CustomColumn";
import { GlobalIcons } from "./../../components/common/GlobalIcons";

function ProjectsTable() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [totalRow, setTotalRow] = useState(0);
  const [tableState, setTableState] = useState({
    search: "",
    sortField: "projectName",
    order: "asc",
    pageNo: 1,
    perPage: 10,
  });
  useEffect(() => {
    setLoading(true);
    getProjectListPagination(tableState)
      .then((res) => {
        setTotalRow(res.data.pagination.totalRow);
        let tempArr = res.data.list.map((item) => {
          return {
            ...item,
            changeStatus: [
              {
                title:
                  item.status === "inProcess"
                    ? "Mark As Completed"
                    : item.status === "notStarted"
                    ? "Mark As Started/In Progress"
                    : "Remove Project from List",
                color:
                  item.status === "inProcess"
                    ? "bg-green-500 hover:bg-green-600"
                    : item.status === "notStarted"
                    ? "bg-blue-400 hover:bg-blue-600"
                    : "bg-red-400 hover:bg-red-600",
                onClickFunction: function () {
                  navigate("/projectsEmployee/raiseIssue");
                },
                icon:
                  item.status === "inProcess" ? (
                    GlobalIcons().projects
                  ) : item.status === "notStarted" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  ),
              },
            ],
            actions: [
              {
                title: "Raise An Issue",
                onClickFunction: function () {
                  navigate("/projectsEmployee/raiseIssue");
                },
                color: "bg-blue-400 hover:bg-blue-600",
                icon: GlobalIcons().raiseHand,
              },
              {
                title: "Open",
                onClickFunction: function () {
                  navigate(`/projectsEmployee/open/${item._id}`);
                },
                color: "bg-blue-400 hover:bg-blue-600",
                icon: GlobalIcons().folder,
              },
              {
                title: "Assign",
                onClickFunction: function () {
                  let userDetails = JSON.parse(
                    localStorage.getItem("UserDetails"),
                  );
                  const data = {
                    userId: userDetails._id,
                    projectid: item.id,
                  };
                  assignProject(data).then((res) => {
                    toast.success("Successfully Assigned");
                  });
                },
                color: "bg-blue-400 hover:bg-blue-600",
                icon: GlobalIcons().plus,
              },
            ],
          };
        });
        setProjectList(tempArr);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data);
        setLoading(false);
        console.log("error project:", err);
      });
  }, [tableState, navigate]);

  const tableHeadings = [
    { name: "S.No.", accesser: "id", type: "serialNo" },
    { name: "Project Name", accesser: "projectName", type: "heading" },
    { name: "Project Code", accesser: "projectCode", type: "code" },
    { name: "Description", accesser: "projectDescription", type: "" },
    {
      name: "Status",
      accesser: "status",
      type: "status",
      renderFunction: renderProjectStatus,
    },
    { name: "Change Status", accesser: "changeStatus", type: "button" },
    { name: "Action", accesser: "actions", type: "actionButton" },
  ];

  const filters = [
    {
      filterName: "Sort",
      options: [
        {
          value: "projectName",
          label: "ProjectName",
        },
        {
          value: "projectCode",
          label: "Project Code",
        },
        {
          value: "projectDescription",
          label: "Description",
        },
      ],
      state: tableState,
      setState: setTableState,
      singleSelect: true,
      stateValue: "sortField",
    },
    {
      filterName: "Sort Order",
      options: [
        {
          value: "asc",
          label: "Ascending",
        },
        {
          value: "desc",
          label: "descending",
        },
      ],
      state: tableState,
      setState: setTableState,
      singleSelect: true,
      stateValue: "order",
    },
  ];

  return (
    <div>
      <Table
        loading={loading}
        tableHeadings={tableHeadings}
        data={projectList}
        tableState={tableState}
        setTableState={setTableState}
        filters={filters}
        totalRow={totalRow}
        handleReset={() =>
          setTableState({
            search: "",
            sortField: "projectName",
            order: "asc",
            pageNo: 1,
            perPage: 10,
          })
        }
      />
    </div>
  );
}

export default ProjectsTable;
