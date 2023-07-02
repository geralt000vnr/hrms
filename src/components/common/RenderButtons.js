import React from "react";

function RenderButtons({ listOfButtons = [] }) {
  return listOfButtons.map((item, index) => {
    if (
      item.buttonName === "Create New" ||
      listOfButtons.length - 1 === index
    ) {
      if (item.isHidden || !item.buttonName) {
        return "";
      } else {
        return (
          <button
            key={index}
            onClick={item.onClickFunction}
            type="button"
            className="text-base flex items-center bg-green-500 px-3 py-2 rounded-md ml-2"
          >
            {item.buttonName}
          </button>
        );
      }
    } else {
      if (item.isHidden || !item.buttonName) {
        return "";
      } else {
        return (
          <button
            key={index}
            type="button"
            onClick={item.onClickFunction}
            className="ml-2 text-base flex items-center bg-blue-500 hover:bg-blue-700 duration-300 px-3 py-2 rounded-md"
          >
            {item.buttonName}
          </button>
        );
      }
    }
  });
}

export default RenderButtons;
