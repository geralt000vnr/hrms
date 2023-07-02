import React from "react";
import { GlobalIcons } from "./GlobalIcons";

function TableFilter({
  filterName,
  options = [],
  state,
  setState,
  stateValue,
  singleSelect,
}) {
  let { arr = [], checkObj = {} } = state;

  const handleChange = (e) => {
    if (singleSelect) {
      setState({ ...state, [stateValue]: e.target.id });
      return;
    }
    let idsArr = arr;
    if (idsArr.includes(e.target.id)) {
      idsArr.splice(idsArr.indexOf(e.target.id), 1);
    } else {
      idsArr.push(e.target.id);
    }
    setState((oldVal) => ({
      arr: idsArr,
      checkObj: { ...checkObj, [e.target.id]: !checkObj[e.target.id] },
    }));
  };
  return (
    <div className="dropdown inline-block relative text-base font-light z-10">
      <button className="bg-gray-200 dark:bg-gray-800 text-white py-2 px-4 rounded inline-flex items-center">
        <span className="mr-1">{filterName}</span>
        {GlobalIcons().downArrow}
      </button>
      <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
        {options.map((option, index) => (
          <li className="" key={index}>
            <label
              htmlFor={option.value}
              className={`${
                !index
                  ? "rounded-t"
                  : index === options.length - 1
                  ? "rounded-b"
                  : ""
              } bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap`}
            >
              <input
                type={"checkbox"}
                id={option.value}
                checked={
                  singleSelect
                    ? state[stateValue] === option.value
                    : state.checkObj[option.value]
                }
                onChange={handleChange}
                className="hidden" //uncomment this when checkbox works with state and also add class in label to show checked label highlighted
              />
              <span>{option.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableFilter;
