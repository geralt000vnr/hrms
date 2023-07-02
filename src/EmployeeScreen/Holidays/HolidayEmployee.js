import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { holidayListPagination } from "../../api";
import { GlobalIcons } from "../../components/common/GlobalIcons";
import Table2 from "../../components/common/Table2";
import { renderHolidayStatus } from "../../components/CustomColumn";

function HolidayEmployee() {
  const navigate = useNavigate();

  const [holidaysList, setHolidaysList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRow, setTotalRow] = useState(0);
  const [tableState, setTableState] = useState({
    search: "",
    sortField: "type",
    order: "asc",
    pageNo: 1,
    perPage: 10,
  });
  useEffect(() => {
    setLoading(true);
    holidayListPagination(tableState)
      .then((res) => {
        setTotalRow(res.data.pagination.totalRow);
        let tempArr = res.data.list.map((item) => {
          return {
            ...item,
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
                  navigate("/projectsEmployee/open");
                },
                color: "bg-blue-400 hover:bg-blue-600",
                icon: GlobalIcons().folder,
              },
              {
                title: "Assign",
                onClickFunction: function () {
                  // let userDetails = JSON.parse(
                  //   localStorage.getItem("UserDetails"),
                  // );
                  // const data = {
                  //   userId: userDetails._id,
                  //   projectid: item.id,
                  // };
                  // assignProject(data).then((res) => {
                  //   toast.success("Successfully Assigned");
                  // });
                },
                color: "bg-blue-400 hover:bg-blue-600",
                icon: GlobalIcons().plus,
              },
            ],
          };
        });
        setHolidaysList(tempArr);
        setLoading(false);
      })
      .catch((err) => console.log("error : ", err));
  }, [tableState, navigate]);

  const tableHeadings = [
    { name: "#ID", accesser: "id", type: "serialNo" },
    { name: "Holiday Type", accesser: "type", type: "heading" },
    { name: "Holiday Start Date", accesser: "startDate", type: "date" },
    { name: "Holiday End Date", accesser: "endDate", type: "date" },
    {
      name: "Status",
      accesser: "status",
      type: "status",
      renderFunction: renderHolidayStatus,
    },
    // { name: "Action", accesser: "actions", type: "buttons" },
    { name: "Action", accesser: "actions", type: "button" },
  ];

  const filters = [
    {
      filterName: "Sort",
      options: [
        {
          value: "type",
          label: "Holiday Type",
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
      data={holidaysList}
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

export default HolidayEmployee;
