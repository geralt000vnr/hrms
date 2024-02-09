import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageComponent from "../../components/common/PageComponent";
import CreateNewUser from "./CreateNewUser";
import ProfilePage from "./ProfilePage";

function ProfileTabs() {
  const { tab } = useParams();
  const navigate = useNavigate();
  return (
    <PageComponent
      heading={
        tab === "me"
          ? "My Profile"
          : tab === "create"
          ? "Add New User"
          : "User Profile"
      }
      listOfButtons={[
        {
          buttonName: "Create New",
          onClickFunction: function () {
            navigate("/userProfile/create");
          },
          isHidden: tab === "create",
        },
      ]}
      componentToBeShown={
        tab === "create" ? <CreateNewUser /> : <ProfilePage />
      }
    />
  );
}

export default ProfileTabs;
