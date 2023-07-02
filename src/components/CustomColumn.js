export const statusUI = ({ color, text, type }) => {
  if (type === "availablityStatus") {
    return (
      <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
        <span
          aria-hidden
          className={`absolute inset-0 bg-${color} opacity-50 rounded-full`}
        ></span>
        <span className="relative dark:text-white font-thin text-sm">
          {text}
        </span>
      </span>
    );
  }
  return <div className={`my-2.5 capitalize text-${color}`}>{text}</div>;
};

export const renderProjectStatus = (value) => {
  const data = value.toString().toLowerCase();
  switch (data) {
    case "inprocess":
      return statusUI({
        color: "blue-500",
        text: "In Process",
        type: "projectStatus",
      });
    case "notstarted":
      return statusUI({
        color: "red-500",
        text: "Not Started",
        type: "projectStatus",
      });
    case "completed":
      return statusUI({
        color: "green-500",
        text: "Completed",
        type: "projectStatus",
      });

    default:
      return statusUI({
        color: "",
        text: "-",
        type: "projectStatus",
      });
  }
};

export const renderHolidayStatus = (value) => {
  const data = value.toString().toLowerCase();
  switch (data) {
    case "decision pending":
      return statusUI({
        color: "blue-500",
        text: "Decision Pending",
        type: "holidayStatus",
      });
    case "unapproved":
      return statusUI({
        color: "red-500",
        text: "Unapproved",
        type: "holidayStatus",
      });
    case "approved":
      return statusUI({
        color: "green-500",
        text: "Approved",
        type: "holidayStatus",
      });

    default:
      return statusUI({
        color: "",
        text: "-",
        type: "holidayStatus",
      });
  }
};

export const renderAvailablityStatus = (value) => {
  const data = value.toString().toLowerCase();
  switch (data) {
    case "takingbreak":
      return statusUI({
        color: "blue-500",
        text: "Taking Break",
        type: "availablityStatus",
      });
    case "holiday":
      return statusUI({
        color: "red-500",
        text: "Holiday",
        type: "availablityStatus",
      });
    case "available":
      return statusUI({
        color: "green-500",
        text: "Available",
        type: "availablityStatus",
      });
    case "latecoming":
      return statusUI({
        color: "yellow-500",
        text: "Late Coming",
        type: "availablityStatus",
      });
    case "earlyleave":
      return statusUI({
        color: "pink-500",
        text: "Early Leave",
        type: "availablityStatus",
      });
    case "halfday":
      return statusUI({
        color: "cyan-500",
        text: "Half Day",
        type: "availablityStatus",
      });

    default:
      return statusUI({
        color: "",
        text: "-",
        type: "availablityStatus",
      });
  }
};
