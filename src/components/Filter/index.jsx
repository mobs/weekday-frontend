import React, { useState } from "react";
import Select from "react-select";
import {
  roles,
  number_of_employees,
  experience,
  remote,
  min_base_salary,
} from "../../constants/contants";

const Filter = ({
  placeholder,
  optionName,
  selectedOption,
  setSelectedOption,
}) => {
  let option;

  const setOptions = () => {
    switch (optionName) {
      case "roles":
        option = roles;
        break;
      case "number_of_employees":
        option = number_of_employees;
        break;
      case "experience":
        option = experience;
        break;
      case "remote":
        option = remote;
        break;
      case "min_base_salary":
        option = min_base_salary;
        break;
      default:
        option = "No Options";
        break;
    }
  };

  setOptions();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Select
        className="basic-multi-select"
        classNamePrefix="select"
        isClearable={true}
        isSearchable={true}
        name="color"
        placeholder={placeholder.label}
        options={option}
        value={selectedOption}
        onChange={handleOptionChange}
      />
    </div>
  );
};

export default Filter;
