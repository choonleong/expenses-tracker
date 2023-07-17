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
        <AlignLeftOutlined />
        <AreaChartOutlined />
      </div>
      <div>
        <button className="primary">Add New</button>
      </div>
    </>
  );
};

export default DataIcons;
