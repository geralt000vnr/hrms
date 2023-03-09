import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageComponent from "../../components/common/PageComponent";
import ApplyNew from "./ApplyNew";
import HolidayEmployee from "./HolidayEmployee";
import RaiseIssue from "./RaiseIssue";

function HolidayTabs() {
  const { tab } = useParams();
  const navigate = useNavigate();
  return (
    <PageComponent
      heading="Employee Holiday"
      listOfButtons={[
        {
          buttonName: "Check Issues",
          onClickFunction: function () {
            navigate("/projectsEmployee/issueList");
          },
        },
        {
          buttonName: "Apply For A Holiday",
          onClickFunction: function () {
            navigate("/holidayEmployee/applyNew");
          },
        },
      ]}
      componentToBeShown={
        tab === "table" ? (
          <HolidayEmployee />
        ) : tab === "raiseIssue" ? (
          <RaiseIssue />
        ) : tab === "applyNew" ? (
          <ApplyNew />
        ) : tab === "open" ? (
          <ApplyNew />
        ) : (
          ""
        )
      }
    />
  );
}

export default HolidayTabs;
