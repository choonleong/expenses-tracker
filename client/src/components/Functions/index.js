import axios from "axios";
import { message } from "antd";

export const FetchAllData = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await axios.get("data/fetchAllData", {
      userid: user._id,
      // timeline,
      // ...(timeline === "custom" && { selectedRange }),
      // type,
    });
    return response.data;
  } catch (error) {
    message.error("Data fetch interuppted");
  }
};

export const DeleteData = async (record, refreshData) => {
  try {
    await axios.delete(`data/deleteData/${record._id}`);
    message.success("Transaction Deleted!");
    refreshData();
  } catch (error) {
    console.log(error);
  }
};

export const AddData = async (values, setShowAddModal) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    await axios.post("data/addData", {
      ...values,
      userid: user._id,
    });
    message.success("Transaction added successfully");
    setShowAddModal(false);
  } catch (error) {
    console.log(error);
    message.error("Failed to add data");
  }
};

export const EditData = async (itemID, values, setShowEditModal) => {
  try {
    console.log(itemID);
    // const user = JSON.parse(localStorage.getItem("user"));
    await axios.put(`data/editData/${itemID}`, {
      data: values,
      // userid: user._id,
    });
    message.success("Edited succesfully!");
    setShowEditModal(false);
  } catch (error) {
    console.log(error);
    message.error("Failed to edit data");
  }
};
