import React, { useContext } from "react";
import { DatePicker, Select } from "antd";

import { useState } from "react";
import "./TimeLine.css";
import { UserContext } from "../../context";
import moment from "moment";
const { RangePicker } = DatePicker;

const TimeLine = () => {
  const { timeline, setTimeline } = useContext(UserContext);
  const [selectedRange, setSelectedRange] = useState({
    start: moment(),
    end: moment(),
  });

  // const handleDateChange = (values) => {
  //   if (Array.isArray(values)) {
  //     // Range selection
  //     setSelectedRange({ start: values[0], end: values[1] });
  //   } else if (values) {
  //     // Single date selection
  //     setSelectedRange({ start: values, end: values });
  //   } else {
  //     // Clear the selection
  //     setSelectedRange({ start: moment(), end: moment() });
  //   }
  // };

  return (
    <>
      <h5>Transactions for the period:</h5>

      <Select
        value={timeline}
        onChange={(value) => setTimeline(value)}
        style={{ width: 180 }}
      >
        <Select.Option value="7">7 days</Select.Option>
        <Select.Option value="30">30 days</Select.Option>
        <Select.Option value="365">365 days</Select.Option>
        <Select.Option value="custom">Custom Timeline</Select.Option>
      </Select>

      {timeline === "custom" && (
        <div className="date-range">
          <RangePicker
            value={selectedRange}
            onChange={(values) => setSelectedRange(values)}
          />
        </div>
      )}
    </>
  );
};

export default TimeLine;
