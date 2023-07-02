import React, { useState } from "react";
import PageComponent from "../../components/common/PageComponent";
import EmployeeList from "./EmployeeList";

function EmployeeListTabs() {
  const [refresh, setRefresh] = useState(true);
  return (
    <PageComponent
      heading={"Employees"}
      listOfButtons={[
        {
          buttonName: "Refresh",
          onClickFunction: function () {
            setRefresh(!refresh);
          },
        },
      ]}
      componentToBeShown={<EmployeeList refresh={refresh} />}
    />
  );
}

export default EmployeeListTabs;
