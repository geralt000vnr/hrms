import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CalenderEmployee from "../EmployeeScreen/CalenderEmployee";
import ChatEmployee from "../EmployeeScreen/ChatEmployee";
import EmployeeHomeScreen from "../EmployeeScreen/EmployeeHomeScreen";
import EmployeeList from "../EmployeeScreen/EmployeeList";
import HolidayTabs from "../EmployeeScreen/Holidays/HolidayTabs";
import ProfileEmployee from "../EmployeeScreen/ProfileEmployee";
import ProjectsTab from "../EmployeeScreen/Projects/ProjectsTab";
import TaskTabs from "../EmployeeScreen/Tasks/TaskTabs";

function User() {
  const { tab, id } = useParams();
  const { user } = useSelector((state) => state);
  // const currentUser = user?.currentUser;
  console.log("currentuser", user, tab, id);
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
          <Route path={"/"} element={<EmployeeHomeScreen />} />
          <Route path={"/calenderemployee"} element={<CalenderEmployee />} />
          <Route path={"/chatemployee"} element={<ChatEmployee />} />
          <Route path={"/Holidayemployee/:tab"} element={<HolidayTabs />} />
          <Route path={"/projectsEmployee/:tab"} element={<ProjectsTab />} />
          <Route path={"/profileemployee"} element={<ProfileEmployee />} />
          <Route path={"/taskEmployee/:tab"} element={<TaskTabs />} />
          <Route path={"/listemployee"} element={<EmployeeList />} />
          <Route path={"*"} element={<EmployeeHomeScreen />} />
        </Routes>
        <Footer />
      </>
      {/* )} */}
    </div>
  );
}

export default User;
