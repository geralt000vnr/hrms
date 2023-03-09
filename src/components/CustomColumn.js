export const statusUI = ({ color, text }) => {
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
