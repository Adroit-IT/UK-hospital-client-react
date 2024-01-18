import { ErrorMessage, Field } from "formik";
import React from "react";

interface SelectProps {
  name: string;
  label: string;
  options: Array<{ value: string; label: string }>;
}

const Select: React.FC<SelectProps> = ({ name, label, options }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name} className="form-select">
        <option value="">Open this select menu</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="div" className="mt-1 text-danger" />
    </div>
  );
};

export default Select;
