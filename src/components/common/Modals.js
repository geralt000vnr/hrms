import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Table2 from "./Table2";

function Modals({ open = false, onClose, heading = "", tableData = {} }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      center
      classNames={{ modal: "bg-gray-800-modal" }}
    >
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-heading">{heading}</h2>
        </div>
        <div className="modal-body">
          <Table2
            loading={tableData.loading}
            tableHeadings={tableData.tableHeadings}
            data={tableData.data}
            tableState={tableData.tableState}
            setTableState={tableData.setTableState}
            filters={tableData.filters}
            totalRow={tableData.totalRow}
            handleReset={
              tableData.handleReset
              //     () =>
              //   setTableState({
              //     search: "",
              //     sortField: "fullName",
              //     order: "asc",
              //     pageNo: 1,
              //     perPage: 10,
              //   })
            }
          />
        </div>
      </div>
    </Modal>
  );
}

export default Modals;
