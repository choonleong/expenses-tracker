import axios from "axios";
import React, { useContext } from "react";
import { message } from "antd";
import { UserContext } from "../../context";

const FetchAllData = async () => {
  const { setGetData } = useContext(UserContext);

  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await axios.get("data/fetchAllData", {
      //   userid: user._id,
      //     frequency,
      //     ...(frequency === "custom" && { selectedRange }),
      //     type,
    });
    setGetData(response.data);
  } catch (error) {
    // message.error("Data fetch interuppted");
  }
};

export default FetchAllData;
