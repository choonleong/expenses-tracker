import React from "react";
import { Select } from "antd";
import { useState } from "react";

const Select_IE = () => {
  const [type, setType] = useState("7");

  return (
    <>
      <h6>Select Income/Expenditure</h6>
      <Select value={type} onChange={(value) => setType(value)}>
        <Select.Option value="all">All</Select.Option>
        <Select.Option value="income">Income</Select.Option>
        <Select.Option value="expense">Expense</Select.Option>
      </Select>
    </>
  );
};

export default Select_IE;
