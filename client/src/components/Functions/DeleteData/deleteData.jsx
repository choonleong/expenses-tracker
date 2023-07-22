import axios from "axios";
import { message } from "antd";

const DeleteData = async (record) => {
  try {
    await axios.delete(`data/deleteData/${record._id}`);
    // {
    //   transactionID: record._id,
    // });
    message.success("Transaction Deleted!");
    // getAllTransactions();
  } catch (error) {
    console.log(error);
    message.error("Unable to Delete");
  }
};

export default DeleteData;
