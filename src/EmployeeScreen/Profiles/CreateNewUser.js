import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCommonComponent } from "../../api";
import {
  Dropdown,
  FormEndBtn,
  Input,
  TextArea,
} from "../../components/CustomComponents";
import { EMAIL_REGEX } from "../../utils/GlobalConstants";

function CreateNewUser() {
  const { tab } = useParams();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [dob, setDob] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [profileDescription, setProfileDescription] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [team, setTeam] = useState("");
  const [role, setRole] = useState("");
  const [profilePic, setProfilePic] = useState();
  const [teamList, setTeamList] = useState([]);
  const [genderList, setGenderList] = useState([]);
  const [designationList, setDesignationList] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);
  const [roleList, setRoleList] = useState([]);
  const [isInValid, setIsInValid] = useState([]);

  useEffect(() => {
    let apiData = {
      valuesRequired: [
        "teamList",
        "genderList",
        "designationList",
        "departmentList",
        "roleList",
      ],
    };
    getCommonComponent(apiData)
      .then(async (res) => {
        setTeamList(res.data?.teamList);
        setGenderList(res.data?.genderList);
        setDesignationList(res.data?.designationList);
        setDepartmentList(res.data?.departmentList);
        setRoleList(res.data?.roleList);
      })
      .catch((err) => console.log("err : ", err));
  }, [tab]);

  const validateUserData = () => {
    if (!firstName) {
      console.log("sfags");
      setIsInValid((prevState) => [...prevState, "firstName"]);
    } else {
      let inValidState = isInValid;
      inValidState.splice(inValidState.indexOf("firstName"), 1);
      setIsInValid((prevState) => [...inValidState]);
    }
    if (!lastName) {
      setIsInValid((prevState) => [...prevState, "lastName"]);
    } else {
      let inValidState = isInValid;
      inValidState.splice(inValidState.indexOf("lastName"), 1);
      setIsInValid((prevState) => [...inValidState]);
    }
    if (!email || !EMAIL_REGEX.test(email)) {
      setIsInValid((prevState) => [...prevState, "email"]);
    } else {
      let inValidState = isInValid;
      inValidState.splice(inValidState.indexOf("email"), 1);
      setIsInValid((prevState) => [...inValidState]);
    }
    if (!phone) {
      setIsInValid((prevState) => [...prevState, "phone"]);
    } else {
      let inValidState = isInValid;
      inValidState.splice(inValidState.indexOf("phone"), 1);
      setIsInValid((prevState) => [...inValidState]);
    }
    if (!password) {
      setIsInValid((prevState) => [...prevState, "password"]);
    } else {
      let inValidState = isInValid;
      inValidState.splice(inValidState.indexOf("password"), 1);
      setIsInValid((prevState) => [...inValidState]);
    }
    if (!confirmPassword) {
      setIsInValid((prevState) => [...prevState, "confirmPassword"]);
    } else {
      let inValidState = isInValid;
      inValidState.splice(inValidState.indexOf("confirmPassword"), 1);
      setIsInValid((prevState) => [...inValidState]);
    }
    if (!dob) {
      setIsInValid((prevState) => [...prevState, "dob"]);
    } else {
      let inValidState = isInValid;
      inValidState.splice(inValidState.indexOf("dob"), 1);
      setIsInValid((prevState) => [...inValidState]);
    }
    if (!joiningDate) {
      setIsInValid((prevState) => [...prevState, "joiningDate"]);
    } else {
      let inValidState = isInValid;
      inValidState.splice(inValidState.indexOf("joiningDate"), 1);
      setIsInValid((prevState) => [...inValidState]);
    }
    if (!gender) {
      setIsInValid((prevState) => [...prevState, "gender"]);
    } else {
      let inValidState = isInValid;
      inValidState.splice(inValidState.indexOf("gender"), 1);
      setIsInValid((prevState) => [...inValidState]);
    }
    if (!currentAddress) {
      setIsInValid((prevState) => [...prevState, "currentAddress"]);
    } else {
      let inValidState = isInValid;
      inValidState.splice(inValidState.indexOf("currentAddress"), 1);
      setIsInValid((prevState) => [...inValidState]);
    }
    if (!permanentAddress) {
      setIsInValid((prevState) => [...prevState, "permanentAddress"]);
    } else {
      let inValidState = isInValid;
      inValidState.splice(inValidState.indexOf("permanentAddress"), 1);
      setIsInValid((prevState) => [...inValidState]);
    }
    if (!profilePic) {
      setIsInValid((prevState) => [...prevState, "profilePic"]);
    } else {
      let inValidState = isInValid;
      inValidState.splice(inValidState.indexOf("profilePic"), 1);
      setIsInValid((prevState) => [...inValidState]);
    }

    if (isInValid.length) {
      console.log("inValid", isInValid);
      return;
    }
    console.log("validaated", isInValid, firstName, lastName);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    validateUserData();
  };

  return (
    <div>
      <form>
        <Input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          label="First Name"
          id="firstName"
          required={true}
          type={"text"}
          inValid={isInValid.includes("firstName")}
          inValidMsg={"First Name is Required"}
        />
        <Input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          label="Last Name"
          id="lastName"
          required={true}
          type={"text"}
          inValid={isInValid.includes("lastName")}
          inValidMsg={"Last Name is Required"}
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          id="email"
          required={true}
          type={"email"}
          inValid={isInValid.includes("email")}
          inValidMsg={"Please Enter A Valid Email Address"}
        />
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          label="Phone"
          id="phone"
          required={true}
          type={"tel"}
          inValid={isInValid.includes("phone")}
          inValidMsg={"Phone is Required"}
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          id="password"
          required={true}
          type={"password"}
          inValid={isInValid.includes("password")}
          inValidMsg={"Password must be 8 character long"}
        />
        <Input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          label="Confirm Password"
          id="confirmPassword"
          required={true}
          type={"password"}
          inValid={isInValid.includes("confirmPassword")}
          inValidMsg={"Confirm Password doesn't match with Password"}
        />
        <Input
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          label="Date of Birth"
          id="dob"
          required={true}
          type={"date"}
          inValid={isInValid.includes("dob")}
          inValidMsg={"Date of Birth is required"}
        />
        <Input
          value={joiningDate}
          onChange={(e) => setJoiningDate(e.target.value)}
          label="Joining Date"
          id="joiningDate"
          required={true}
          type={"date"}
          inValid={isInValid.includes("joiningDate")}
          inValidMsg={"Joining Date is required"}
        />
        <Input
          value={profileDescription}
          onChange={(e) => setProfileDescription(e.target.value)}
          label="Profile Description"
          id="profileDescription"
          required={false}
          type={"text"}
        />
        <Input
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          label="Education"
          id="education"
          required={false}
          type={"text"}
        />
        <Input
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          label="Experience"
          id="experience"
          required={false}
          type={"text"}
        />
        <Dropdown
          dropdownArr={genderList}
          selectedValue={gender}
          setSelectedValue={setGender}
          label="Gender"
          id="gender"
          required={true}
          inValid={isInValid.includes("gender")}
          inValidMsg={"Gneder is Required"}
        />
        <Dropdown
          dropdownArr={designationList}
          selectedValue={designation}
          setSelectedValue={setDesignation}
          label="Designation"
          id="designation"
        />
        <Dropdown
          dropdownArr={departmentList}
          selectedValue={department}
          setSelectedValue={setDepartment}
          label="Department"
          id="department"
        />
        <Dropdown
          dropdownArr={teamList}
          selectedValue={team}
          setSelectedValue={setTeam}
          label="Team"
          id="team"
        />
        <Dropdown
          dropdownArr={roleList}
          selectedValue={role}
          setSelectedValue={setRole}
          label="Role"
          id="role"
        />
        <TextArea
          value={currentAddress}
          onChange={(e) => setCurrentAddress(e.target.value)}
          label="Current Address"
          id="currentAddress"
          required={true}
          type={"text"}
          inValid={isInValid.includes("currentAddress")}
          inValidMsg={"Current Address is required"}
        />
        <TextArea
          value={permanentAddress}
          onChange={(e) => setPermanentAddress(e.target.value)}
          label="Permanent Address"
          id="permanentAddress"
          required={true}
          type={"text"}
          inValid={isInValid.includes("permanentAddress")}
          inValidMsg={"Permanent Address is required"}
        />
        <Input
          // value={profilePic}
          onChange={(e) =>
            setProfilePic(e.target.files[0] ? e.target.files[0] : "")
          }
          label="Profile Picture"
          id="profilePic"
          required={true}
          type={"file"}
          inValid={isInValid.includes("profilePic")}
          inValidMsg={"Profile picture is required"}
        />
        <FormEndBtn
          onSubmit={handleSubmitForm}
          onCancel={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        />
      </form>
    </div>
  );
}

export default CreateNewUser;
