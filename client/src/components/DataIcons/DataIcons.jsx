import React from "react";
import {
  AlignLeftOutlined,
  AreaChartOutlined,
  //   FormOutlined,
  //   CloseSquareOutlined,
} from "@ant-design/icons";
import "./DataIcons.css";

const DataIcons = () => {
  return (
    <>
      <div className="data-svg-icons">
        <AlignLeftOutlined className="outlined-list" />
        <AreaChartOutlined className="outlined-chart" />
      </div>
      <div>
        <button className="add-new-data">Add New</button>
      </div>
    </>
  );
};

export default DataIcons;
