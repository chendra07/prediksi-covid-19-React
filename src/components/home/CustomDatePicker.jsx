import React, { useState, useEffect } from "react";
import moment from "moment";
import { Tabs, DatePicker } from "antd";

const CustomDatePicker = ({ pickedDate }) => {
  const dateFormat = "DD-MM-YYYY";
  const defaultDate = "02-01-2022";
  const { RangePicker } = DatePicker;

  return (
    <div className="date_picker">
      <RangePicker
        defaultValue={[
          moment(defaultDate, dateFormat),
          moment(defaultDate, dateFormat),
        ]}
        disabled={[true, false]}
        onChange={(date) => pickedDate(date)}
        style={{
          height: "50px",
          width: "20vw",
          border: "3px solid grey",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "30px",
        }}
      />
    </div>
  );
};

export default CustomDatePicker;
