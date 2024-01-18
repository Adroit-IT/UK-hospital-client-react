import "flatpickr/dist/flatpickr.css";
import { BaseOptions } from "flatpickr/dist/types/options";
import React, { useMemo, useState } from "react";
import Flatpickr from "react-flatpickr";
import { useSelector } from "react-redux";

interface CustomDatePickerProps {
  mode: "date" | "datetime" | "range" | "time";
  initialValue: string | string[] | Date | Date[];
  onChange: (value: string | string[] | Date | Date[]) => void;
}

interface IRootState {
  themeConfig: {
    rtlClass: string;
  };
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  mode,
  initialValue,
  onChange,
}) => {
  const isRtl = useSelector(
    (state: IRootState) => state.themeConfig.rtlClass === "rtl"
  );
  const [date, setDate] = useState<string | string[] | Date | Date[]>(
    initialValue
  );

  const datePickerOptions = useMemo(() => {
    return {
      date: { dateFormat: "Y-m-d" },
      datetime: { enableTime: true, dateFormat: "Y-m-d H:i" },
      range: { mode: "range", dateFormat: "Y-m-d" },
      time: { noCalendar: true, enableTime: true, dateFormat: "H:i" },
    };
  }, []);

  const options = useMemo(() => {
    const baseOptions: Partial<BaseOptions> = {
      position: isRtl ? "auto right" : "auto left",
    };

    return { ...baseOptions, ...datePickerOptions[mode] };
  }, [datePickerOptions, isRtl, mode]);

  return (
    <Flatpickr
      value={date}
      options={options as BaseOptions}
      className="form-input"
      onChange={(selectedDate) => {
        setDate(selectedDate);
        onChange(selectedDate);
      }}
    />
  );
};

export default CustomDatePicker;
