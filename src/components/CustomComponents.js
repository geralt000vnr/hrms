import React from "react";

export function Input({
  value,
  onChange,
  label,
  id,
  required,
  type,
  disabled,
}) {
  return (
    <div title={label}>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type={type}
          name={id}
          id={id}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required={required}
          value={value}
          onChange={onChange}
          disabled={disabled ? disabled : false}
        />
        <label
          htmlFor={id}
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
          &nbsp;
          {required && "*"}
        </label>
      </div>
    </div>
  );
}

export function TextArea({ value, onChange, label, id, required, type }) {
  return (
    <div title={label}>
      <div className="relative z-0 w-full mb-6 group">
        <textarea
          type={type}
          name={id}
          id={id}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer overflow-hidden"
          placeholder=" "
          required={required}
          value={value}
          onChange={onChange}
          rows={5}
        />
        <label
          htmlFor={id}
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label} *
        </label>
      </div>
    </div>
  );
}

export function FormEndBtn({ onSubmit, onCancel }) {
  return (
    <div>
      {onSubmit && (
        <button
          onClick={onSubmit}
          title="Submit"
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mx-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      )}
      {onCancel && (
        <button
          type="button"
          onClick={onCancel}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mx-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Cancel
        </button>
      )}
    </div>
  );
}

export const Dropdown = ({
  dropdownArr,
  selectedValue,
  setSelectedValue,
  label,
  required,
  id,
}) => {
  return (
    <div className="relative z-0 w-full mb-6 group" title={label}>
      <select
        id={id}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer overflow-hidden"
        aria-labelledby="dropdownDefault"
        onChange={setSelectedValue}
        required={required}
      >
        <option>Select...</option>
        {dropdownArr &&
          dropdownArr.length &&
          dropdownArr.map((item) => {
            return (
              <option
                className={
                  item.value === "inProcess"
                    ? "text-blue-500 text-center bg-gray-200 dark:bg-gray-800 "
                    : ""
                }
                value={item.value}
                selected={item.value === selectedValue}
              >
                {item.label}
              </option>
            );
          })}
      </select>
      <label
        htmlFor={id}
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
        &nbsp;
        {required && "*"}
      </label>
      {/* </div> */}
    </div>
  );
};

export const RaiseIssueForm = ({
  name,
  setName,
  description,
  setDescription,
  label,
  id,
  caller,
  onCancel,
  onSubmit,
}) => {
  return (
    <div className="relative z-0 w-full mb-6 group" title={label}>
      <form>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          label={`${caller ? caller : ""} Name`}
          id={`${caller ? caller : ""}Name`}
          required={true}
          type={"text"}
        />
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label={`${caller ? caller : ""} Description`}
          id={`${caller ? caller : ""}Description`}
          required={true}
          type={"text"}
        />
        <FormEndBtn
          onCancel={onCancel ? onCancel : false}
          onSubmit={onSubmit ? onSubmit : false}
        />
      </form>
    </div>
  );
};

export function Range({ value, onChange, label, id, required }) {
  return (
    <div title={label}>
      <div className="relative pt-1">
        <label
          htmlFor={id}
          className="form-label text-sm text-gray-500 dark:text-gray-400 duration-300 origin-[0]"
        >
          {label}
          &nbsp;
          {required && "*"}
        </label>
        <input
          type="range"
          className="form-range w-full h-6 p-0 bg-gradient-to-r from-cyan-500 via-cyan-700 to-red-500 focus:outline-none focus:ring-0 focus:shadow-none"
          min="0"
          max="10"
          step="1"
          id={id}
          value={value}
          onChange={onChange}
          required={required}
        />
      </div>
    </div>
  );
}
