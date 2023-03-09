import React from "react";
import { momentDate } from "../../utils/CommonDateFunction";
import LoadingEffect from "../../utils/LoadingEffect";

function Table({ loading, tableHeadings = [], data = [] }) {
  const RenderCells = ({ type, value, renderFunction }) => {
    if (type === "serialNo") {
      return <td className="py-2 px-2">#{value}</td>;
    } else if (type === "heading") {
      return (
        <td className="ml-2 font-semibold max-w-[100px] truncate" title={value}>
          {value ? value : "-"}
        </td>
      );
    } else if (type === "code") {
      return <td className="py-2 font-roboto">{value ? value : "-"}</td>;
    } else if (type === "status") {
      return (
        <td className="text-left max-w-[80px]">{renderFunction(value)}</td>
      );
    } else if (type === "date") {
      return <td className="py-2 max-w-[100px]">{momentDate(value)}</td>;
    } else if (type === "button") {
      return (
        <td className="table-cell last:max-w-[75px]">
          <div className="inline-flex">
            {value &&
              value.length &&
              value.map((item, index) => {
                return (
                  <button
                    key={index}
                    title={item.title}
                    onClick={item.onClickFunction}
                    className={`px-2 py-1 my-2 mx-1 text-white rounded-md duration-300 max-w-[120px] flex-wrap ${item.color}`}
                  >
                    {item.icon}
                  </button>
                );
              })}
          </div>
        </td>
      );
    } else {
      return (
        <td className="text-left py-2 max-w-[170px] truncate" title={value}>
          {value ? value : "-"}
        </td>
      );
    }
  };
  return loading ? (
    <LoadingEffect name="projectTable" no={5} />
  ) : (
    <table className="min-w-full table-auto">
      <thead className="justify-between text-white">
        <tr className="bg-gray-100 dark:bg-gray-800 rounded-lg font-Acme text-left">
          {tableHeadings.map((th, index) => {
            return (
              <th key={index} className=" py-2">
                {th.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="bg-gray-200 dark:bg-slate-800">
        {data.map((item, index) => {
          return (
            <tr
              key={index}
              className="bg-white dark:bg-slate-800 text-black dark:text-white border-4 border-gray-200 dark:border-gray-700"
            >
              {tableHeadings &&
                tableHeadings.length &&
                tableHeadings.map((th) => {
                  return (
                    <RenderCells
                      type={th.type}
                      value={item[th.accesser]}
                      renderFunction={th.renderFunction}
                    />
                  );
                })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
