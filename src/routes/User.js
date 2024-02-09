import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import CalenderEmployee from "../EmployeeScreen/CalenderEmployee";
import ChatEmployee from "../EmployeeScreen/ChatEmployee";
import EmployeeHomeScreen from "../EmployeeScreen/EmployeeHomeScreen";
import EmployeeListTabs from "../EmployeeScreen/employeeList/EmployeeListTabs";
import HolidayTabs from "../EmployeeScreen/Holidays/HolidayTabs";
import ProfileTabs from "../EmployeeScreen/Profiles/ProfileTabs";
import ProjectsTab from "../EmployeeScreen/Projects/ProjectsTab";
import TaskTabs from "../EmployeeScreen/Tasks/TaskTabs";
import TeamTabs from "../EmployeeScreen/Teams/TeamTabs";
import PermissionTabs from "../EmployeeScreen/PermessionManagement/PermissionTabs";
import PrivateRoutes from "./PrivateRoutes";

function User() {
  return (
    <div>
      {/* {currentUser.userType === "Admin" ? (
        <>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<EmployeeHomeScreen />} />
            <Route path={"/calenderemployee"} element={<CalenderEmployee />} />
            <Route path={"/chatemployee"} element={<ChatEmployee />} />
            <Route path={"/holidayEmployee/:tab"} element={<HolidayTabs />} />
            <Route path={"/projectsEmployee/:tab"} element={<ProjectsTab />} />
            <Route path={"/profileemployee"} element={<ProfileEmployee />} />
            <Route path={"/taskEmployee/:tab/:id?"} element={<TaskTabs />} />
            <Route path={"/listemployee"} element={<EmployeeList />} />
            <Route path={"*"} element={<EmployeeHomeScreen />} />
          </Routes>
          <Footer />
        </>
      ) : currentUser.userType === "HR" ? (
        <>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<EmployeeHomeScreen />} />
            <Route path={"/calenderemployee"} element={<CalenderEmployee />} />
            <Route path={"/chatemployee"} element={<ChatEmployee />} />
            <Route path={"/Holidayemployee/:tab"} element={<HolidayTabs />} />
            <Route path={"/projectsemployee"} element={<ProjectsEmployee />} />
            <Route path={"/profileemployee"} element={<ProfileEmployee />} />
            <Route path={"/taskemployee"} element={<TaskEmployee />} />
            <Route path={"/listemployee"} element={<EmployeeList />} />
            <Route path={"*"} element={<EmployeeHomeScreen />} />
          </Routes>
          <Footer />
        </>
      ) : currentUser.userType === "TL" ? (
        <>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<EmployeeHomeScreen />} />
            <Route path={"/calenderemployee"} element={<CalenderEmployee />} />
            <Route path={"/chatemployee"} element={<ChatEmployee />} />
            <Route path={"/Holidayemployee/:tab"} element={<HolidayTabs />} />
            <Route path={"/projectsemployee"} element={<ProjectsEmployee />} />
            <Route path={"/profileemployee"} element={<ProfileEmployee />} />
            <Route path={"/taskemployee"} element={<TaskEmployee />} />
            <Route path={"/listemployee"} element={<EmployeeList />} />
            <Route path={"*"} element={<EmployeeHomeScreen />} />
          </Routes>
          <Footer />
        </>
      ) : (*/}
      <>
        <Navbar />
        <Routes>
          <Route path={"/dashboard"} element={<EmployeeHomeScreen />} />
          <Route path={"/calenderemployee"} element={<CalenderEmployee />} />
          <Route path={"/chatemployee/:id"} element={<ChatEmployee />} />
          {/* <Route path="/chatemployee">
            <Route index element={<ChatEmployee />} />
            <Route path=":id" element={<ChatEmployee />} />
          </Route> */}
          {/* <PrivateRoutes
            path={"/Holidayemployee/:tab"}
            Component={HolidayTabs}
          /> */}
          <Route path={"/Holidayemployee/:tab"} element={<HolidayTabs />} />
          <Route path={"/projectsEmployee/:tab"}>
            <Route index element={<ProjectsTab />} />
            <Route path=":id" element={<ProjectsTab />} />
          </Route>
          <Route path={"/userProfile/:tab"} element={<ProfileTabs />} />
          <Route path={"/taskEmployee/:tab/:id"}>
            <Route index element={<TaskTabs />} />
            <Route path=":projectId" element={<TaskTabs />} />
          </Route>
          <Route path={"/teams/:tab"} element={<TeamTabs />} />
          <Route path={"/listemployee"} element={<EmployeeListTabs />} />
          <Route path={"/permissionManagement/:tab"}>
            <Route index element={<PermissionTabs />} />
            <Route path=":id" element={<PermissionTabs />} />
          </Route>
          <Route path={"*"} element={<Navigate to={"/dashboard"} />} />
        </Routes>
        {/* <Footer /> */}
      </>
      {/* )} */}
    </div>
  );
}

export default User;
