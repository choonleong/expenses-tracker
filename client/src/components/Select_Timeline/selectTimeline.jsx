import React, { useContext } from "react";
import { UserContext } from "../../context";
import { DatePicker, Select } from "antd";
import "./selectTimeLine.css";

const { RangePicker } = DatePicker;

const TimeLine = () => {
  const { timeline, setTimeline } = useContext(UserContext);
  const { selectedRange, setSelectedRange } = useContext(UserContext);

  return (
    <>
      <h5>Transactions for the period:</h5>

      <Select
        value={timeline}
        onChange={(value) => setTimeline(value)}
        style={{ width: 180 }}
      >
        <Select.Option value="all">All</Select.Option>
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
