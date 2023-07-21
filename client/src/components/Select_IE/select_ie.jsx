import React from "react";
import { Select } from "antd";
import { useState } from "react";

const SelectIE = () => {
  const [type, setType] = useState("All");

  return (
    <>
      <h5>Select Income/Expenditure</h5>
      <Select
        value={type}
        onChange={(value) => setType(value)}
        style={{ width: 180 }}
      >
        <Select.Option value="all">All</Select.Option>
        <Select.Option value="income">Income</Select.Option>
        <Select.Option value="expense">Expenses</Select.Option>
      </Select>
    </>
  );
};

export default SelectIE;
