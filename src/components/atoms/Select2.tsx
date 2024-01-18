import React from "react";
import Select from "react-select";

interface Select2Props {
  options: { value: string; label: string }[];
  placeholder: string;
  isMulti?: boolean;
  isSearchable?: boolean;
}

const Select2: React.FC<Select2Props> = ({
  options,
  placeholder,
  isMulti = false,
  isSearchable = true,
}) => {
  return (
    <Select
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
      isSearchable={isSearchable}
    />
  );
};

export default Select2;
