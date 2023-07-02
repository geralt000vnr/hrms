import React from "react";
import Select from "react-select";

export function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const Input = ({
  value,
  onChange,
  label,
  id,
  required,
  type,
  disabled,
  placeholder,
  inValid,
  inValidMsg,
  ...rest
}) => {
  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor={id}
          className="block text-sm font-normal text-gray-500 dark:text-gray-400"
        >
          {label}
          &nbsp;
          {required && "*"}
        </label>
        <input
          type={type ? type : "text"}
          id={id}
          value={value}
          onChange={onChange}
          required={required ? required : false}
          disabled={disabled ? disabled : false}
          className={`border-b-2 ${
            inValid ? "border-red-600" : "border-gray-300 dark:border-gray-600"
          } text-gray-900 focus:outline-none w-full p-2.5 bg-gray-800 dark:text-white text-sm`}
          placeholder={placeholder ? placeholder : "Enter " + label}
          {...rest}
        />
        {inValid && (
          <p className="mt-2 ml-2 text-sm text-red-600 dark:text-red-500 italic">
            {inValidMsg}
          </p>
        )}
      </div>
    </div>
  );
};

export function TextArea({
  value,
  onChange,
  label,
  id,
  required,
  type,
  placeholder,
  inValid,
  inValidMsg,
}) {
  return (
    <div title={label}>
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor={id}
          className="block text-sm font-normal text-gray-500 dark:text-gray-400"
        >
          {label}
          &nbsp;
          {required && "*"}
        </label>
        <textarea
          type={type}
          name={id}
          id={id}
          className={`border-b-2 ${
            inValid ? "border-red-600" : "border-gray-300 dark:border-gray-600"
          } text-gray-900 focus:outline-none w-full p-2.5 bg-gray-800 dark:text-white text-sm mt-1`}
          required={required}
          value={value}
          onChange={onChange}
          rows={5}
          placeholder={placeholder ? placeholder : "Write here..."}
        />
        {inValid && (
          <p className="mt-2 ml-2 text-sm text-red-600 dark:text-red-500 italic">
            {inValidMsg}
          </p>
        )}
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
  disabled,
  multiple,
  menuIsOpen,
  customSelect,
}) => {
  return (
    <div
      className="relative z-0 w-full mb-6 group"
      title={disabled ? label + " (Disabled)" : label}
    >
      <label
        htmlFor={id}
        className="block text-sm font-normal text-gray-500 dark:text-gray-400"
      >
        {label}
        &nbsp;
        {required && "*"}
      </label>
      {multiple ? (
        <Select
          value={selectedValue}
          onChange={setSelectedValue}
          options={dropdownArr}
          isMulti
          menuIsOpen={menuIsOpen}
        />
      ) : customSelect ? (
        <select
          id={id}
          className="block p-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer overflow-hidden"
          aria-labelledby="dropdownDefault"
          onChange={(e) => setSelectedValue(e.target.value)}
          value={selectedValue}
          required={required}
          disabled={disabled}
        >
          <option className={"text-gray-100 dark:bg-gray-800 mx-2"}>
            Select...
          </option>
          {dropdownArr &&
            dropdownArr.length &&
            dropdownArr.map((item, index) => {
              return (
                <option
                  className={"text-gray-100 dark:bg-gray-800 mx-1"}
                  value={item.value}
                  key={index}
                >
                  {item.label}
                </option>
              );
            })}
        </select>
      ) : (
        <Select
          value={selectedValue}
          onChange={setSelectedValue}
          options={dropdownArr}
          menuIsOpen={menuIsOpen}
        />
      )}
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
    </div>
  );
};

export function Range({ value, onChange, label, id, required }) {
  return (
    <div title={label}>
      <div className="relative pt-1">
        <label
          htmlFor={id}
          className="block text-sm font-normal text-gray-500 dark:text-gray-400"
        >
          {label}
          &nbsp;
          {required && "*"}
        </label>
        <input
          type="range"
          className="form-range w-full h-6 p-0 bg-gradient-to-r from-cyan-500 via-cyan-700 to-red-500 focus:outline-none focus:ring-0 focus:shadow-none"
          min="0"
          max="100"
          step="10"
          id={id}
          value={value}
          onChange={onChange}
          required={required}
        />
      </div>
    </div>
  );
}
