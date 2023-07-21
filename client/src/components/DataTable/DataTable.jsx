import React from "react";
import { Table } from "antd";
// import moment from "moment";
// import React, { useState } from "react";
// import { DeleteFilled, EditFilled } from "@ant-design/icons";

// const [showModal, setShowModal] = useState(false);

const DataTable = () => {
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      // render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Reference",
      dataIndex: "reference",
    },
    // {
    //   title: "Actions",
    //   render: () => (
    //     <div>
    //       <EditFilled
    //       // onClick={() => {
    //       //   setEditable(record);
    //       //   setShowModal(true);
    //       // }}
    //       />
    //       <DeleteFilled
    //       // className="mx-2"
    //       // onClick={() => {
    //       //   handleDelete(record);
    //       // }}
    //       />
    //     </div>
    //   ),
    // },
  ];

  return (
    <>
      <Table columns={columns} />
    </>
  );
};

export default DataTable;