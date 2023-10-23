"use client";
import Dropdown from "react-select";

interface SelectProps {
  defaultValue: string;
  name: string;
  options: any;
}

const Select = ({ defaultValue, name, options }: SelectProps) => {
  return <Dropdown defaultValue={defaultValue} name={name} options={options} />;
};

export default Select;
