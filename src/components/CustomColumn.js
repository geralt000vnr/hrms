export const statusUI = ({ text }) => {
  return <div>{text}</div>;
};

export const renderStatus = (value) => {
  switch (value) {
    case value === "approved":
      return statusUI("Approved");

    default:
      break;
  }
};
