import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectTaskList } from "../../api";
import Table from "../../components/common/Table2";

function AssignedTasks() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [tasksList, setTasksList] = useState([]);
  const [totalRow, setTotalRow] = useState(0);
  const [tableState, setTableState] = useState({
    search: "",
    sortField: "taskName",
    order: "asc",
    pageNo: 1,
    perPage: 10,
    projectId: id,
  });

  useEffect(() => {
    setLoading(true);
    getProjectTaskList(tableState)
      .then((res) => {
        setTotalRow(res.data.pagination.totalRow);
        setTasksList(res.data?.list);
        setLoading(false);
      })
      .catch((err) => {
        console.error("error :", err);
        setLoading(false);
      });
  }, [id, tableState]);

  return (
    <div>
      <Table
        type={"taskTable"}
        loading={loading}
        data={tasksList}
        totalRow={totalRow}
        tableState={tableState}
        setTableState={setTableState}
        handleReset={() =>
          setTableState({
            search: "",
            sortField: "taskName",
            order: "asc",
            pageNo: 1,
            perPage: 10,
          })
        }
      />
    </div>
  );
}

export default AssignedTasks;
