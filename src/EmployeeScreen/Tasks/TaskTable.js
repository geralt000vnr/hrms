import React, { useEffect, useState } from "react";
import { getTaskList } from "../../api";
import Table2 from "../../components/common/Table2";

function TaskTable() {
  const [loading, setLoading] = useState(true);

  const [taskList, setTaskList] = useState([]);
  const [totalRow, setTotalRow] = useState(0);
  const [tableState, setTableState] = useState({
    search: "",
    sortField: "taskName",
    order: "asc",
    pageNo: 1,
    perPage: 10,
  });

  useEffect(() => {
    setLoading(true);
    getTaskList(tableState)
      .then((res) => {
        setTaskList(res.data.list);
        setTotalRow(res.data.pagination.total);
        setLoading(false);
      })
      .catch((err) => console.log("err :", err));
  }, [tableState]);

  return (
    <div>
      <Table2
        type={"taskTable"}
        loading={loading}
        data={taskList}
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

export default TaskTable;
