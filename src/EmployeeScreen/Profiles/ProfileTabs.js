import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageComponent from "../../components/common/PageComponent";
import ProfilePage from "./ProfilePage";

function ProfileTabs() {
  const { tab } = useParams();
  const navigate = useNavigate();
  return (
    <PageComponent
      heading={tab === "me" ? "My Profile" : "User Profile"}
      listOfButtons={[
        {
          buttonName: "Create New",
          onClickFunction: function () {
            navigate("/teams/create");
          },
          isHidden: tab === "create",
        },
      ]}
      componentToBeShown={<ProfilePage />}
    />
  );
}

export default ProfileTabs;
