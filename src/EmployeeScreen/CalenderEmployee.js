import React, { useState } from "react";
import Calendar from "react-calendar";

function CalenderEmployee() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="lg:-mt-80 mt-10 ml-5 lg:ml-16 mr-5 lg:mr-64 h-auto bg-gray-200 dark:bg-gray-800 w-auto rounded-lg">
      <div className="bg-white dark:bg-gray-900 dark:text-white px-10 py-5 rounded-t-lg text-3xl font-semibold text-gray-900">
        Employee Calender
      </div>
      <div className="bg-gray-200 dark:bg-gray-800 dark:text-white">
        <Calendar
          onChange={onChange}
          value={value}
          tileClassName={
            "h-20 border-y-[1px] border-x-[1px] hover:bg-gray-400 hover:text-black"
          }
          showNeighboringMonth={false}
          onClickDay={(value) => console.log("clg value", value)}
          className={"w-full h-auto text-center"}
        />
      </div>
    </div>
  );
}

export default CalenderEmployee;
