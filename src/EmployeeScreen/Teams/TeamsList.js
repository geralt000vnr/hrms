import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCommonComponent } from "../../api";
import { getTeamList } from "../../api/TeamServices";
import { GlobalIcons } from "../../components/common/GlobalIcons";
import Table2 from "../../components/common/Table2";

function TeamList({ refresh }) {
  const navigate = useNavigate();
  const [usersList, setUsersList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const [teamList, setTeamList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRow, setTotalRow] = useState(0);
  const [tableState, setTableState] = useState({
    search: "",
    sortField: "teamName",
    order: "asc",
    pageNo: 1,
    perPage: 10,
  });

  useEffect(() => {
    setLoading(true);
    getTeamList(tableState)
      .then((res) => {
        setTotalRow(res.data.pagination.totalRows);
        let tempArr = res.data.list.map((item) => {
          return {
            ...item,
            actions: [
              {
                title: "Open",
                onClickFunction: function () {
                  navigate(`/teams/open/${item._id}`);
                },
                color: "bg-blue-400 hover:bg-blue-600",
                icon: GlobalIcons().folder,
              },
            ],
          };
        });
        setTeamList(tempArr);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error :", err);
        setLoading(false);
      });
  }, [tableState, navigate, refresh]);

  useEffect(() => {
    let apiData = {
      valuesRequired: ["projectList", "userList"],
    };
    getCommonComponent(apiData)
      .then(async (res) => {
        setUsersList(res.data?.userList);
        setProjectList(res.data.ProjectList);
      })
      .catch((err) => console.log("err : ", err));
  }, []);

  const tableHeadings = [
    { name: "Team Name", accesser: "teamName", type: "" },
    {
      name: "Team Lead",
      accesser: "teamLead",
      type: "filterItem",
      list: usersList,
    },
    {
      name: "Assigned Members",
      accesser: "assignedMembers",
      type: "filterArray",
      list: usersList,
    },
    {
      name: "Senior Member",
      accesser: "seniorMember",
      type: "filterArray",
      list: usersList,
    },
    {
      name: "Assigned Members",
      accesser: "assignedProjects",
      type: "filterArray",
      list: projectList,
    },
    { name: "Actions", accesser: "actions", type: "actionButton" },
  ];

  const filters = [
    {
      filterName: "Sort",
      options: [
        {
          value: "teamName",
          label: "Team Name",
        },
        {
          value: "teamLead",
          label: "Team Lead",
        },
        {
          value: "seniorMember",
          label: "Senior Member",
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
      data={teamList}
      tableState={tableState}
      setTableState={setTableState}
      filters={filters}
      totalRow={totalRow}
      handleReset={() =>
        setTableState({
          search: "",
          sortField: "teamName",
          order: "asc",
          pageNo: 1,
          perPage: 10,
        })
      }
    />
  );
}

export default TeamList;
