import React, { useContext } from "react";
import { Select } from "antd";
import { UserContext } from "../../context";

const SelectIE = () => {
  const { selectedType, setSelectedType } = useContext(UserContext);

  return (
    <>
      <h5>Select Income/Expenditure</h5>
      <Select
        value={selectedType}
        onChange={(value) => setSelectedType(value)}
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
