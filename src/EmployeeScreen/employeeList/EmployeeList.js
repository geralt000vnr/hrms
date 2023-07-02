import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserListPagination } from "../../api";
import Table2 from "../../components/common/Table2";
import { renderAvailablityStatus } from "../../components/CustomColumn";
import { GlobalIcons } from "./../../components/common/GlobalIcons";

function EmployeeList({ refresh }) {
  const navigate = useNavigate();
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRow, setTotalRow] = useState(0);
  const [tableState, setTableState] = useState({
    search: "",
    sortField: "fullName",
    order: "asc",
    pageNo: 1,
    perPage: 10,
  });

  useEffect(() => {
    setLoading(true);
    getUserListPagination(tableState)
      .then((res) => {
        setTotalRow(res.data.pagination.totalRows);
        let tempArr = res.data.list.map((item) => {
          return {
            ...item,
            user: {
              fullName: item.fullName,
              profilePic: item.profilePic,
            },
            available: "takingbreak",
            actions: [
              {
                title: "Start Chat",
                onClickFunction: function () {
                  navigate("/chatemployee/table");
                },
                color: "bg-blue-500 text-white hover:bg-blue-600",
                icon: GlobalIcons().chat,
              },
              {
                title: "Send Mail",
                onClickFunction: function () {
                  navigate("/projectsEmployee/open");
                },
                color: "bg-blue-500 text-white hover:bg-blue-600",
                icon: GlobalIcons().mail,
              },
            ],
          };
        });
        setUsersList(tempArr);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error :", err);
        setLoading(false);
      });
  }, [tableState, navigate, refresh]);

  const tableHeadings = [
    { name: "Name", accesser: "user", type: "user" },
    { name: "Designation", accesser: "degination", type: "array" },
    { name: "Department", accesser: "department", type: "" },
    { name: "Working On Projects", accesser: "workingOnProject", type: "" },
    {
      name: "Availablity",
      accesser: "available",
      type: "status",
      renderFunction: renderAvailablityStatus,
    },
    { name: "Action", accesser: "actions", type: "actionButton" },
  ];

  const filters = [
    {
      filterName: "Sort",
      options: [
        {
          value: "fullName",
          label: "Name",
        },
        {
          value: "designation",
          label: "Desgnation",
        },
        {
          value: "department",
          label: "Department",
        },
        {
          value: "workingOnProject",
          label: "Working on Project",
        },
        {
          value: "availablity",
          label: "Availablity",
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
    <Table2
      loading={loading}
      tableHeadings={tableHeadings}
      data={usersList}
      tableState={tableState}
      setTableState={setTableState}
      filters={filters}
      totalRow={totalRow}
      handleReset={() =>
        setTableState({
          search: "",
          sortField: "fullName",
          order: "asc",
          pageNo: 1,
          perPage: 10,
        })
      }
    />
  );
}

export default EmployeeList;
