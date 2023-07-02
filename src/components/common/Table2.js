import React, { useEffect, useState } from "react";
import LoadingEffect from "../../utils/LoadingEffect";
import NoData from "../../utils/NoData";
import TableFilter from "./TableFilter";
import { Link } from "react-router-dom";
import { RenderCells } from "./RenderCells";
import { GlobalIcons } from "./GlobalIcons";

function Table2({
  type,
  loading,
  tableHeadings = [],
  data = [],
  setTableState,
  tableState,
  filters = [],
  totalRow,
  handleReset,
}) {
  const [tempSearch, setTempSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setTableState((val) => ({ ...val, search: tempSearch }));
    }, 1000);
    return () => clearTimeout(timer);
  }, [tempSearch, setTableState]);

  const handlePage = (dir) => {
    if (dir === "next") {
      setTableState((val) => ({ ...val, pageNo: ++tableState.pageNo }));
    } else {
      setTableState((val) => ({ ...val, pageNo: --tableState.pageNo }));
    }
  };

  return loading ? (
    <LoadingEffect name="projectTable" no={5} />
  ) : type === "taskTable" ? (
    <div>
      <div className=" flex items-center justify-between pb-6">
        <div className="flex bg-gray-50 dark:bg-zinc-800 items-center p-2 rounded-md">
          {GlobalIcons().search}
          <input
            className="bg-gray-50 dark:bg-zinc-800 dark:text-white outline-none ml-1 block "
            type="search"
            name=""
            id=""
            placeholder="Search..."
            value={tempSearch}
            onChange={(e) => setTempSearch(e.target.value)}
          />
        </div>
        <div className="lg:ml-40 ml-10 space-x-2 flex">
          {filters.map((filter, index) => (
            <React.Fragment key={index}>
              <TableFilter {...filter} />
            </React.Fragment>
          ))}
        </div>
      </div>
      {data.length ? (
        data.map((item) => {
          return (
            <div
              className={`flex flex-col p-4 rounded-xl text-white mx-auto my-5 bg-gradient-to-r ${
                item.progressTillNow > 74
                  ? "from-amber-600 via-lime-600 to-green-800"
                  : item.progressTillNow > 49
                  ? "from-blue-500 via-purple-500 to-purple-600"
                  : item.progressTillNow > 24
                  ? "from-yellow-500 via-orange-500 to-red-600"
                  : "from-slate-700 via-gray-700 to-zinc-800"
              }`}
              key={item._id}
            >
              <div>
                <span className="text-xs">{item.teamName}</span>
                <button
                  className="float-right"
                  onClick={() => {
                    console.log("cross button clicked");
                  }}
                >
                  {GlobalIcons().cross}
                </button>
              </div>
              <div>
                <p className="text-xl font-bold mt-3 mb-5">{item.taskName}</p>
                <Link
                  to={`/taskEmployee/open/${item._id}`}
                  className="bg-green-500 rounded-md px-3 py-2 float-right"
                >
                  open
                </Link>
              </div>

              <div className="text-xs mb-2">
                {item.progressTillNow}% Task Completed
              </div>
              <div className="w-full bg-gray-400 p-0">
                <div
                  className={`w-[${item.progressTillNow}%] bg-white h-1`}
                ></div>
              </div>
            </div>
          );
        })
      ) : (
        <NoData type="table" />
      )}
    </div>
  ) : (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-md w-full">
      <div className=" flex items-center justify-between pb-6">
        <div className="flex bg-gray-50 dark:bg-zinc-800 items-center p-2 rounded-md">
          {GlobalIcons().search}
          <input
            className="bg-gray-50 dark:bg-zinc-800 dark:text-white outline-none ml-1 block "
            type="search"
            name=""
            id=""
            placeholder="Search..."
            value={tempSearch}
            onChange={(e) => setTempSearch(e.target.value)}
          />
        </div>
        <div className="lg:ml-40 ml-10 space-x-2 flex">
          {filters.map((filter, index) => (
            <React.Fragment key={index}>
              <TableFilter {...filter} />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          {data.length ? (
            <table className="min-w-full leading-normal">
              <thead className="justify-between text-white">
                <tr className="bg-gray-100 dark:bg-gray-800 rounded-lg text-left">
                  {tableHeadings.map((th, index) => {
                    return (
                      <th
                        key={index}
                        className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-neutral-800 dark:text-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        {th.name}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-b border-gray-200 bg-white dark:bg-neutral-900 dark:border-gray-700"
                    >
                      {tableHeadings &&
                        tableHeadings.length &&
                        tableHeadings.map((th, index) => {
                          return (
                            <React.Fragment key={index}>
                              <RenderCells
                                type={th.type}
                                value={item[th.accesser]}
                                renderFunction={th.renderFunction}
                                list={th.list}
                              />
                            </React.Fragment>
                          );
                        })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <NoData type="table" />
          )}
          <div className="px-5 py-5 bg-white dark:bg-neutral-900 border-t flex xs:flex-row items-end justify-between">
            <button
              className="text-sm text-indigo-50 transition duration-150 bg-green-600 font-semibold py-2 px-4 rounded-sm"
              onClick={() => handleReset()}
            >
              Reset
            </button>
            {data.length ? (
              <div className="inline-flex mt-2 xs:mt-0">
                <button
                  className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l disabled:bg-gray-500"
                  onClick={() => handlePage()}
                  disabled={tableState.pageNo === 1}
                >
                  Prev
                </button>
                &nbsp; &nbsp;
                <button
                  className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r disabled:bg-gray-500"
                  onClick={() => handlePage("next")}
                  disabled={
                    Math.ceil(totalRow / tableState.perPage) ===
                    tableState.pageNo
                  }
                >
                  Next
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table2;
