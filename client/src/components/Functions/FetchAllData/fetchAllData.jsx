import axios from "axios";

const FetchAllData = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await axios.get("data/fetchAllData", {
      //   userid: user._id,
      //     frequency,
      //     ...(frequency === "custom" && { selectedRange }),
      //     type,
    });
    return response.data;
  } catch (error) {
    message.error("Data fetch interuppted");
  }
};

export default FetchAllData;
