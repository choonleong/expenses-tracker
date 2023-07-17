import React from "react";
import { DatePicker, Select } from "antd";
import { useState } from "react";

const TimeLine = () => {
  const [timeline, setTimeline] = useState("7");
  const [selectedRange, setSelectedRange] = useState([]);

  //   {
  //     timeline === "custom" && (
  //       <div className="temp">
  //         <DatePicker
  //           value={selectedRange}
  //           onChange={(values) => setSelectedRange(values)}
  //         />
  //       </div>
  //     );
  //   }

  return (
    <>
      <h6>Transactions for the past...</h6>

      <Select value={timeline} onChange={(value) => setTimeline(value)}>
        <Select.Option value="7">7 days</Select.Option>
        <Select.Option value="30">30 days</Select.Option>
        <Select.Option value="365">365 days</Select.Option>
        {/* <Select.Option value="custom">Custom Timeline</Select.Option> */}
      </Select>

      {/* {timeline === "custom" && (
        <div className="mt-2">
          <DatePicker
            value={selectedRange}
            onChange={(values) => setSelectedRange(values)}
          />
        </div>
      )} */}
    </>
  );
};

export default TimeLine;
