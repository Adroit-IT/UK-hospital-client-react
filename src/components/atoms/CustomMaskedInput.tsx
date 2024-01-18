import { useField } from "formik";
import React from "react";
import MaskedInput from "react-text-mask";

interface CustomMaskedInputProps {
  label: string;
  name: string;
  mask: Array<string | RegExp>;
  placeholder: string;
}

const CustomMaskedInput: React.FC<CustomMaskedInputProps> = ({
  label,
  name,
  mask,
  placeholder,
}) => {
  const [field, meta] = useField(name);

  return (
    <div>
      <label htmlFor={name} className="text-white-dark">
        {label}
      </label>
      <MaskedInput
        id={name}
        type="text"
        placeholder={placeholder}
        className={`form-input ${
          meta.touched && meta.error ? "border-red-500" : ""
        }`}
        mask={mask}
        {...field}
      />
      {meta.touched && meta.error && (
        <div className="mt-1 text-red-500">{meta.error}</div>
      )}
    </div>
  );
};

export default CustomMaskedInput;
