import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context";
import { DatePicker, Select } from "antd";
import { FetchAllData } from "../Functions";
import "./selectTimeLine.css";

const { RangePicker } = DatePicker;

const TimeLine = () => {
  const {
    selectedType,
    timeline,
    setTimeline,
    setGetData,
    selectedRange,
    setSelectedRange,
  } = useContext(UserContext);

  const handleTimeLineChange = async (value) => {
    console.log(value, selectedType);
    setTimeline(value);

    try {
      setGetData(await FetchAllData(value, selectedType)); //sets the data directly instead of awaiting/fetching through variable. If variable = await(fetch), the variable will be using the old value.
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Perform data fetching when 'selectedType' changes
    const fetchData = async () => {
      try {
        const data = await FetchAllData(timeline, selectedType);
        setGetData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Fetch data initially when the component mounts and whenever 'selectedType' changes
  }, [selectedType]);

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
            onChange={(values) => setSelectedRange(values)}
          />
        </div>
      )}
    </>
  );
};

export default TimeLine;
