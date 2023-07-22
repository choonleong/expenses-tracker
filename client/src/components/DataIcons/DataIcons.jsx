import React, { useState, useContext } from "react";
import { UserContext } from "../../context";
import { AlignLeftOutlined, AreaChartOutlined } from "@ant-design/icons";
import "./DataIcons.css";
import { Modal, Form, Input, Select } from "antd";

const DataIcons = () => {
  const [selectData, setSelectData] = useState("data");
  // const [showModal, setShowModal] = useState(false);
  const { showAddModal, setShowAddModal } = useContext(UserContext);

  const addNewTransaction = () => {
    setShowAddModal(true);
    console.log(setShowAddModal);
  };

  return (
    <>
      <div className="data-svg-icons">
        <AlignLeftOutlined
          className={`outlined-list ${
            selectData === "data" ? "active-icon" : "inactive-icon"
          }`}
          onClick={() => setSelectData("data")}
        />
        <AreaChartOutlined
          className={`outlined-chart ${
            selectData === "chart" ? "active-icon" : "inactive-icon"
          }`}
          onClick={() => setSelectData("chart")}
        />
      </div>
      <div className="add-button">
        <button className="add-new-data" onClick={addNewTransaction}>
          Add New
        </button>
      </div>
      <Modal
        // title={editable ? "Edit Transaction" : "Add Transection"}
        className="wrapper-modal"
        title={"Add Transaction"}
        open={showAddModal}
        onCancel={() => setShowAddModal(false)}
        footer={false}
      >
        <br></br>
        <Form layout="vertical" className="transaction-form">
          <Form.Item label="Amount" name="amount">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Select>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expense">Expense</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Type" name="type">
            <Select>
              <Select.Option value="salary">Salary</Select.Option>
              <Select.Option value="tip">Tip</Select.Option>
              <Select.Option value="project">Project</Select.Option>
              <Select.Option value="food">Food</Select.Option>
              <Select.Option value="movie">Movie</Select.Option>
              <Select.Option value="bills">Bills</Select.Option>
              <Select.Option value="medical">Medical</Select.Option>
              <Select.Option value="fee">Fee</Select.Option>
              <Select.Option value="tax">TAX</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Date" name="date">
            <Input type="date" />
          </Form.Item>
          <Form.Item label="Reference" name="reference">
            <Input type="text" />
          </Form.Item>
          <div className="modal-addbutton">
            <button type="primary" className="submit-button-modal">
              {" "}
              Save
            </button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default DataIcons;
