import React from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../../api/httpServices";
import { momentDate } from "../../utils/CommonDateFunction";

export const RenderCells = ({ type, value, renderFunction, list }) => {
  if (type === "serialNo") {
    return (
      <td className="py-2 px-2 text-gray-900 dark:text-gray-400">#{value}</td>
    );
  } else if (type === "heading") {
    return (
      <td
        className="ml-2 font-semibold max-w-[100px] truncate text-gray-900 dark:text-gray-400"
        title={value}
      >
        {value ? value : "-"}
      </td>
    );
  } else if (type === "code") {
    return (
      <td className="p-2 font-roboto text-gray-900 dark:text-gray-400">
        {value ? value : "-"}
      </td>
    );
  } else if (type === "status") {
    return (
      <td className="px-5 py-5 text-sm min-w-[150px]">
        {renderFunction(value)}
      </td>
    );
  } else if (type === "date") {
    return (
      <td className="py-2 max-w-[100px] text-gray-900 dark:text-gray-400">
        {momentDate(value)}
      </td>
    );
  } else if (type === "user") {
    return (
      <td className="px-5 py-5">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-full h-full rounded-full"
              src={baseURL + (value.profilePic ? value.profilePic : "")}
              alt={value.profilePic ? value.profilePic : "...."}
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 dark:text-gray-400 whitespace-no-wrap">
              {value.fullName}
            </p>
          </div>
        </div>
      </td>
    );
  } else if (type === "array") {
    return (
      <td className="px-5 py-5 text-sm">
        <p className="text-gray-900 dark:text-gray-400 whitespace-wrap max-w-[150px]">
          {value.length
            ? value.map((item, index) => (
                <React.Fragment key={index}>
                  {item}
                  {index === value.length - 1 ? "" : ", "}
                </React.Fragment>
              ))
            : "-"}
        </p>
      </td>
    );
  } else if (type === "filterArray") {
    return (
      <td className="px-5 py-5 text-sm">
        <p className="text-gray-900 dark:text-gray-400 whitespace-wrap max-w-[150px]">
          {value.length
            ? value.map((item, index) => (
                <React.Fragment key={index}>
                  {list && list.length
                    ? list.filter((val) => val.value === item).length
                      ? list.find((val) => val.value === item).label
                      : item
                    : "-"}
                  {index === value.length - 1 ? "" : ", "}
                </React.Fragment>
              ))
            : "-"}
        </p>
      </td>
    );
  } else if (type === "filterItem") {
    return (
      <td className="px-5 py-5 text-sm">
        <p className="text-gray-900 dark:text-gray-400 whitespace-wrap max-w-[150px]">
          {list && list.length ? (
            list.filter((val) => val.value === value).length ? (
              <Link to={`/userProfile/${value}`}>
                {list.find((val) => val.value === value).label}
              </Link>
            ) : (
              value
            )
          ) : (
            "-"
          )}
        </p>
      </td>
    );
  } else if (type === "button") {
    return (
      <td className="px-5 py-5 text-sm">
        {value &&
          value.length &&
          value.map((item, index) => {
            return (
              <button
                key={index}
                title={item.title}
                onClick={item.onClickFunction}
                className={`px-2 py-1 my-2 mx-1 rounded-full duration-300 max-w-[120px] min-h-[30px] flex-wrap ${item.color}`}
              >
                {item.icon}
              </button>
            );
          })}
      </td>
    );
  } else if (type === "actionButton") {
    return (
      <td className="px-5 py-5 text-sm inline-flex">
        {value &&
          value.length &&
          value.map((item, index) => {
            return (
              <button
                key={index}
                title={item.title}
                onClick={item.onClickFunction}
                className={`px-2 py-1 my-2 mx-1 rounded-full duration-300 max-w-[120px] min-h-[30px] flex-wrap ${item.color}`}
              >
                {item.icon}
              </button>
            );
          })}
      </td>
    );
  } else {
    return (
      <td className="px-5 py-5 text-sm" title={value}>
        {/* <td className="text-left py-2 max-w-[170px] truncate"> this line is commented for different type of data recieved */}
        <p className="text-gray-900 dark:text-gray-400 whitespace-no-wrap">
          {value ? value : "-"}
        </p>
      </td>
    );
  }
};
