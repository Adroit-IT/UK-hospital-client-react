import { ErrorMessage, Field } from "formik";
import React from "react";

interface CheckboxRadioProps {
  name: string;
  label: string;
  type: string;
}

const CheckboxRadio: React.FC<CheckboxRadioProps> = ({ name, label, type }) => {
  return (
    <div>
      <label>
        <Field type={type} name={name} />
        {label}
      </label>
      <ErrorMessage name={name} component="div" className="mt-1 text-danger" />
    </div>
  );
};

export default CheckboxRadio;
