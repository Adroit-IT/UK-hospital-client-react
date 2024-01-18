import { ErrorMessage, Field } from "formik";
import React from "react";

interface InputProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ name, label, type, placeholder }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        type={type}
        id={name}
        placeholder={placeholder}
        className="form-input"
      />
      <ErrorMessage name={name} component="div" className="mt-1 text-danger" />
    </div>
  );
};

export default Input;
