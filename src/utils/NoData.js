import React from "react";

function NoData({ type = "" }) {
  if (type === "table") {
    return <div className="text-white text-center">No Data To Show</div>;
  }
  return <div>noData</div>;
}

export default NoData;
