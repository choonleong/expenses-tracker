import axios from "axios";
import { message } from "antd";

const DeleteData = async (record, refreshData) => {
  try {
    await axios.delete(`data/deleteData/${record._id}`);
    // {
    //   transactionID: record._id,
    // });
    message.success("Transaction Deleted!");
    refreshData();
  } catch (error) {
    console.log(error);
  }
};

export default DeleteData;
