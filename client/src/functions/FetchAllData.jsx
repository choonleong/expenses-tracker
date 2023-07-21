import axios from "axios";
import React, { useState } from "react";

const fetchAllData = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.post("/data/fetchAllData", {
      userid: user._id,
      //   frequency,
      //   selectedDate,
      //   type,
    });
    setAllTransection(res.data);
    console.log(res.data);
  } catch (error) {
    console.log(error);
    message.error("Error fetching data");
  }
};

export default fetchAllData;
