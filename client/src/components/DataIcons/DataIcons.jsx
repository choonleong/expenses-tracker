import React, { useContext } from "react";
import { UserContext } from "../../context";
import { AlignLeftOutlined, AreaChartOutlined } from "@ant-design/icons";
import "./DataIcons.css";
import { Modal, Form, Input, Select } from "antd";
import { AddData, FetchAllData } from "../Functions";

const DataIcons = () => {
  const {
    selectData,
    setSelectData,
    selectCategory,
    setSelectCategory,
    showAddModal,
    setShowAddModal,
    setGetData,
    timeline,
  } = useContext(UserContext);

  const addNewTransaction = () => {
    setShowAddModal(true);
  };

  const handleCategoryChange = (value) => {
    setSelectCategory(value);
  };

  const onFinish = async (values) => {
    try {
      await AddData(values, setShowAddModal);
      const data = await FetchAllData(timeline);
      setGetData(data);
    } catch (error) {
      console.log(error);
    }
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
        <Form
          layout="vertical"
          className="transaction-form"
          onFinish={onFinish}
        >
          <Form.Item label="Amount" name="amount">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Select onChange={handleCategoryChange}>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expense">Expense</Select.Option>
            </Select>
          </Form.Item>

          {selectCategory === "income" ? (
            <>
              <Form.Item label="Type" name="type">
                <Select>
                  <Select.Option value="salary">Salary</Select.Option>
                  <Select.Option value="investments">Investments</Select.Option>
                  <Select.Option value="dividends">Dividends</Select.Option>
                  <Select.Option value="capital">Capital Gains</Select.Option>
                  <Select.Option value="deposits">Fixed Deposits</Select.Option>
                  <Select.Option value="hustles">Side Hustles</Select.Option>
                </Select>
              </Form.Item>
            </>
          ) : selectCategory === "expense" ? (
            <>
              <Form.Item label="Type" name="type">
                <Select>
                  <Select.Option value="housing">Housing</Select.Option>
                  <Select.Option value="transportation">
                    Transportation
                  </Select.Option>
                  <Select.Option value="food">Food</Select.Option>
                  <Select.Option value="utilities">Utilities</Select.Option>
                  <Select.Option value="insurance">Insurance</Select.Option>
                  <Select.Option value="medical">
                    Medical and Healthcare
                  </Select.Option>
                  <Select.Option value="personal">
                    Personal Spending
                  </Select.Option>
                  <Select.Option value="recreation">
                    Recreation and Entertainment
                  </Select.Option>
                  <Select.Option value="travel">Travel</Select.Option>
                  <Select.Option value="misc">Miscellanous</Select.Option>
                </Select>
              </Form.Item>
            </>
          ) : null}
          <Form.Item label="Date" name="date">
            <Input type="date" />
          </Form.Item>
          <Form.Item label="Reference" name="reference">
            <Input type="text" />
          </Form.Item>
          <div className="modal-addbutton">
            <button type="submit" className="submit-button-modal">
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
