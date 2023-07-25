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

    const sortedData = response.data.sort((a, b) => {
      // Assuming 'a.date' and 'b.date' are properties representing the date
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB; // Use '-1' for ascending, '1' for descending order
    });

    return sortedData;
  } catch (error) {
    message.error("Data fetch interuppted");
  }
};

export const DeleteData = async (record) => {
  try {
    await axios.delete(`data/deleteData/${record._id}`);
    message.success("Transaction Deleted!");
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
