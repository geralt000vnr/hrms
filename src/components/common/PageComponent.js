import React from "react";
import RenderButtons from "./RenderButtons";

function PageComponent({
  heading = "",
  listOfButtons = [],
  componentToBeShown,
  modals = [],
}) {
  return (
    <div className="min-table-height">
      <div className="mt-10 lg:-mt-80 ml-5 lg:ml-16 mr-5 lg:mr-64 h-auto bg-gray-200 dark:bg-gray-800 w-auto rounded-lg min-h-[80vh]">
        <div className="bg-white dark:bg-gray-900 dark:text-white px-10 py-5 rounded-t-lg text-3xl font-semibold text-gray-900 flex align-center justify-between">
          {heading}
          <div className="flex">
            <RenderButtons listOfButtons={listOfButtons} />
          </div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 h-auto px-10 py-5 min-h-[70vh]">
          {componentToBeShown}
        </div>
      </div>
      {modals.map((item, index) => (
        <React.Fragment key={index}>{item}</React.Fragment>
      ))}
    </div>
  );
}

export default PageComponent;
