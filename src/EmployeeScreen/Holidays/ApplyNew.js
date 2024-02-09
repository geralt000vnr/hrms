import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { applyHoliday } from "../../api";
import { Dropdown, FormEndBtn, Input } from "../../components/CustomComponents";

function ApplyNew() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state);
  const { rolePermissions } = useSelector((state) => state.permissions);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [reason, setReason] = useState("");
  const [holidayType, setHolidayType] = useState();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      startDate: startDate && new Date(startDate).getTime(),
      endDate: endDate && new Date(endDate).getTime(),
      reason,
      alternateEmail: email,
      alternateMobile: mobile,
      userId: user.currentUser.id,
      type: holidayType ? holidayType.value : "",
    };
    applyHoliday(formData)
      .then((res) => {
        console.log("ressspoinse", res);
        toast.success("Applied New Holiday");
        navigate(-1);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div>
      <form>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Alternate Email Address"
          id="floating_email"
          required={true}
          type={"email"}
        />
        <Input
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          label="Alternate Mobile Number"
          id="floating_number"
          required={true}
          type={"number"}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
        <Input
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          label="Reason"
          id="floating_reason"
          required={true}
          type={"text"}
        />
        <Dropdown
          dropdownArr={[
            { label: "Casual Leave", value: "casualLeave" },
            { label: "Paid Leave", value: "paidLeave" },
            { label: "Sick Leave", value: "sickLeave" },
          ]}
          selectedValue={holidayType}
          setSelectedValue={setHolidayType}
          label="Holiday Type"
          id={"holidayType"}
          required={true}
        />
        <div class="grid xl:grid-cols-2 xl:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <Input
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              label="Start Date"
              id="floating_Start_Date"
              required={true}
              type={"date"}
            />
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <Input
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              label="End Date"
              id="floating_End_Date"
              required={true}
              type={"date"}
            />
          </div>
        </div>
        {console.log("sdgad", rolePermissions)}
        <FormEndBtn
          onSubmit={handleSubmit}
          submitDisabled={!rolePermissions?.permissions?.includes("holidaysu")}
        />
      </form>
    </div>
  );
}

export default ApplyNew;
