import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageComponent from "../../components/common/PageComponent";
import TeamForm from "./TeamForm";
import TeamList from "./TeamsList";

function TeamTabs() {
  const [refresh, setRefresh] = useState(true);
  const { tab } = useParams();
  const navigate = useNavigate();
  return (
    <PageComponent
      heading={tab === "create" ? "Create New" : "Teams"}
      listOfButtons={[
        {
          buttonName: "Refresh",
          onClickFunction: function () {
            setRefresh(!refresh);
          },
          isHidden: tab !== "table",
        },
        {
          buttonName: "Create New",
          onClickFunction: function () {
            navigate("/teams/create");
          },
          isHidden: tab === "create",
        },
      ]}
      componentToBeShown={
        tab === "table" ? (
          <TeamList refresh={refresh} />
        ) : tab === "create" || tab === "open" ? (
          <TeamForm />
        ) : (
          "TO DO RENDER OTHER COMPONENT"
        )
      }
    />
  );
}

export default TeamTabs;
