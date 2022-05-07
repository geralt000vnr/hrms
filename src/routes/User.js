import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CalenderEmployee from "../EmployeeScreen/CalenderEmployee";
import ChatEmployee from "../EmployeeScreen/ChatEmployee";
import EmployeeHomeScreen from "../EmployeeScreen/EmployeeHomeScreen";
import EmployeeList from "../EmployeeScreen/EmployeeList";
import HolidayEmployee from "../EmployeeScreen/HolidayEmployee";
import ProfileEmployee from "../EmployeeScreen/ProfileEmployee";
import ProjectsEmployee from "../EmployeeScreen/ProjectsEmployee";
import TaskEmployee from "../EmployeeScreen/TaskEmployee";

function User() {
  const { user } = useSelector((state) => state);
  const currentUser = user?.currentUser;
  return (
    <div>
      {currentUser.userType === "Admin" ? (
        <>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<EmployeeHomeScreen />} />
            <Route path={"/calenderemployee"} element={<CalenderEmployee />} />
            <Route path={"/chatemployee"} element={<ChatEmployee />} />
            <Route path={"/Holidayemployee"} element={<HolidayEmployee />} />
            <Route path={"/projectsemployee"} element={<ProjectsEmployee />} />
            <Route path={"/profileemployee"} element={<ProfileEmployee />} />
            <Route path={"/taskemployee"} element={<TaskEmployee />} />
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
            <Route path={"/Holidayemployee"} element={<HolidayEmployee />} />
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
            <Route path={"/Holidayemployee"} element={<HolidayEmployee />} />
            <Route path={"/projectsemployee"} element={<ProjectsEmployee />} />
            <Route path={"/profileemployee"} element={<ProfileEmployee />} />
            <Route path={"/taskemployee"} element={<TaskEmployee />} />
            <Route path={"/listemployee"} element={<EmployeeList />} />
            <Route path={"*"} element={<EmployeeHomeScreen />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<EmployeeHomeScreen />} />
            <Route path={"/calenderemployee"} element={<CalenderEmployee />} />
            <Route path={"/chatemployee"} element={<ChatEmployee />} />
            <Route path={"/Holidayemployee"} element={<HolidayEmployee />} />
            <Route path={"/projectsemployee"} element={<ProjectsEmployee />} />
            <Route path={"/profileemployee"} element={<ProfileEmployee />} />
            <Route path={"/taskemployee"} element={<TaskEmployee />} />
            <Route path={"/listemployee"} element={<EmployeeList />} />
            <Route path={"*"} element={<EmployeeHomeScreen />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default User;
