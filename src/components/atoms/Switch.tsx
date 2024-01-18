import React, { useState } from "react";

interface SwitchProps {
  id: string;
  checked: boolean;
  onChange?: (isChecked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ id, checked, onChange }) => {
  const [isChecked, setChecked] = useState(checked);

  const handleToggle = () => {
    setChecked(!isChecked);
    onChange && onChange(!isChecked);
  };

  return (
    <label className="relative w-12 h-6">
      <input
        type="checkbox"
        className="absolute z-10 w-full h-full opacity-0 cursor-pointer custom_switch peer"
        id={id}
        checked={isChecked}
        onChange={handleToggle}
      />
      <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
    </label>
  );
};

export default Switch;
