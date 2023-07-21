import React, { useState } from "react";
import { AlignLeftOutlined, AreaChartOutlined } from "@ant-design/icons";
import "./DataIcons.css";

const DataIcons = () => {
  const [selectData, setSelectData] = useState("data");

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
        <button className="add-new-data">Add New</button>
      </div>
    </>
  );
};

export default DataIcons;
