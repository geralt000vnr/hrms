import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "react-responsive-modal/styles.css";
import PageComponent from "../../components/common/PageComponent";
import PermissionsTable from "./PermissionsTable";
import PermissionForm from "./PermissionForm";

function PermissionTabs() {
  const { tab } = useParams();
  const navigate = useNavigate();

  return (
    <PageComponent
      heading={"Permission Management"}
      listOfButtons={
        [
          // {
          //   buttonName: "Create New",
          //   onClickFunction: function () {
          //     navigate("/permissionManagement/add");
          //   },
          //   isHidden: tab === "add",
          // },
        ]
      }
      componentToBeShown={
        tab === "table" ? <PermissionsTable /> : <PermissionForm />
      }
    />
  );
}

export default PermissionTabs;
