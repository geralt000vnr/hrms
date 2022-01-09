import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CalenderEmployee from "../EmployeeScreen/CalenderEmployee";
import ChatEmployee from "../EmployeeScreen/ChatEmployee";
import EmployeeHomeScreen from "../EmployeeScreen/EmployeeHomeScreen";
import EmployeeList from "../EmployeeScreen/EmployeeList";
import InvoiceEmployee from "../EmployeeScreen/InvoiceEmployee";
import ProfileEmployee from "../EmployeeScreen/ProfileEmployee";
import ProjectsEmployee from "../EmployeeScreen/ProjectsEmployee";
import TaskEmployee from "../EmployeeScreen/TaskEmployee";

function User() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<EmployeeHomeScreen />} />
        <Route path={"/calenderemployee"} element={<CalenderEmployee />} />
        <Route path={"/chatemployee"} element={<ChatEmployee />} />
        <Route path={"/invoiceemployee"} element={<InvoiceEmployee />} />
        <Route path={"/projectsemployee"} element={<ProjectsEmployee />} />
        <Route path={"/profileemployee"} element={<ProfileEmployee />} />
        <Route path={"/taskemployee"} element={<TaskEmployee />} />
        <Route path={"/listemployee"} element={<EmployeeList />} />
        <Route path={"*"} element={<EmployeeHomeScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default User;
