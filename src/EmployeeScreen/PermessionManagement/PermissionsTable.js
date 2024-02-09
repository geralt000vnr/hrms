import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Table from "../../components/common/Table2";
import { GlobalIcons } from "./../../components/common/GlobalIcons";
import { getAllRoleList } from "../../api/PermissionServices";

function PermissionsTable() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [roleList, setRoleList] = useState([]);
  const [totalRow, setTotalRow] = useState(0);
  const [tableState, setTableState] = useState({
    search: "",
    sortField: "role",
    order: "asc",
    pageNo: 1,
    perPage: 10,
  });
  useEffect(() => {
    setLoading(true);
    getAllRoleList(tableState)
      .then((res) => {
        setTotalRow(res.data.pagination.totalRow);
        let tempArr = res.data.list.map((item) => {
          return {
            ...item,
            actions: [
              {
                title: "Open",
                onClickFunction: function () {
                  navigate(`/permissionManagement/open/${item._id}`);
                },
                color: "bg-blue-400 hover:bg-blue-600",
                icon: GlobalIcons().folder,
              },
            ],
          };
        });
        setRoleList(tempArr);
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
    { name: "Role Name", accesser: "roleName", type: "heading" },
    { name: "Role", accesser: "role", type: "" },
    { name: "Action", accesser: "actions", type: "actionButton" },
  ];

  const filters = [
    {
      filterName: "Sort",
      options: [
        {
          value: "roleName",
          label: "Role Name",
        },
        {
          value: "role",
          label: "Role",
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
        data={roleList}
        tableState={tableState}
        setTableState={setTableState}
        filters={filters}
        totalRow={totalRow}
        handleReset={() =>
          setTableState({
            search: "",
            sortField: "roleName",
            order: "asc",
            pageNo: 1,
            perPage: 10,
          })
        }
      />
    </div>
  );
}

export default PermissionsTable;
