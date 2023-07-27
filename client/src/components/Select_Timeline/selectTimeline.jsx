import React, { useContext } from "react";
import { UserContext } from "../../context";
import { DatePicker, Select } from "antd";
import { FetchAllData } from "../Functions";
import "./selectTimeLine.css";

const { RangePicker } = DatePicker;

const TimeLine = () => {
  const { timeline, setTimeline, selectedRange, setGetData, setSelecteRange } =
    useContext(UserContext);

  const handleTimeLineChange = async (value) => {
    setTimeline(value);

    try {
      const data = await FetchAllData(timeline);
      setGetData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h5>Transactions for the period:</h5>

      <Select
        value={timeline}
        onChange={(value) => handleTimeLineChange(value)}
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
            onChange={(values) => setSelecteRange(values)}
          />
        </div>
      )}
    </>
  );
};

export default TimeLine;
